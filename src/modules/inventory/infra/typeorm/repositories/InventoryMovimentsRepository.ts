import { getRepository, Repository, getManager } from "typeorm";

import { InventoryMoviment } from "@modules/inventory/infra/typeorm/entities/inventoryMoviment";
import { IInventoryMovimentsRepository } from "@modules/inventory/repositories/IInventoryMovimentRepository";
import { ICreateInventoryMovimentDTO } from "@modules/inventory/dtos/ICreateInventoryMovimentDTO";

class InventoryMovimentsRepository implements IInventoryMovimentsRepository {
  private repository: Repository<InventoryMoviment>;

  constructor() {
    this.repository = getRepository(InventoryMoviment);
  }
  
  async create({
    id,
    item_id,
    supplier_id,
    type_Moviment,
    quantity,
    unit_price,
    total_price,
  }: ICreateInventoryMovimentDTO): Promise<InventoryMoviment> {
    const inventoryMoviment = this.repository.create({
      id,
      item_id,
      supplier_id,
      type_Moviment,
      quantity,
      unit_price,
      total_price,
    });

    await this.repository.save(inventoryMoviment);

    return inventoryMoviment;
  }

  async updateById(
    id: string,
    {
      item_id,
      supplier_id,
      type_Moviment,
      quantity,
      unit_price,
      total_price,
    }: ICreateInventoryMovimentDTO
  ): Promise<void> {
    await this.repository.update(
      id,
      {
        item_id,
        supplier_id,
        type_Moviment,
        quantity,
        unit_price,
        total_price,
      }
    );
  }

  async findById(id: string): Promise<InventoryMoviment> {
    const inventoryMoviment = await this.repository
      .createQueryBuilder("inventoryMoviment")
      .innerJoinAndSelect("inventoryMoviment.item", "item")
      .innerJoinAndSelect("inventoryMoviment.supplier", "supplier")
      .where({ id })
      .getOne()

    return inventoryMoviment;
  }

  async findAll(): Promise<InventoryMoviment[]> {
    const inventoryMoviments = await this.repository
      .createQueryBuilder("inventoryMoviment")
      .innerJoinAndSelect("inventoryMoviment.item", "item")
      .innerJoinAndSelect("inventoryMoviment.supplier", "supplier")
      .getMany()

    return inventoryMoviments;
  }

  async delete(id: string): Promise<void> {
    await this.repository.softDelete(id);
  }

  async reportInventoryValuePerItem(): Promise<[]> {
    const entityManager = getManager();
    const resultQuery = await entityManager.query(`
    select 
      i."name",
      CAST(im_a.total_price - im_b.total_price AS FLOAT) as value
    from 
      items i
      inner join (
        select
          item_id,
          sum(total_price) as total_price 
        from
          inventory_movements
        where
          "type_Moviment" = 'entry'
          and deleted_at is null
        group by
          item_id) as im_a on im_a.item_id = i.id
      inner join (
        select
          item_id,
          sum(total_price) as total_price 
        from
          inventory_movements
        where
          "type_Moviment" = 'output'
          and deleted_at is null
        group by
          item_id) as im_b on im_b.item_id = i.id;
    `,);

    return resultQuery;
  }

  async reportInventoryQuantity(): Promise<[]> {
    const entityManager = getManager();
    const resultQuery = await entityManager.query(`
    select
      name,
      value,
      percentageMinimumInventory
    from
    (
      select 
            i."name",
            CAST(im_a.quantity - im_b.quantity AS FLOAT) as value,
            (CAST(im_a.quantity - im_b.quantity AS FLOAT) * 100 / i.minimum_inventory) - 100 as percentageMinimumInventory
          from 
            items i
            inner join (
              select
                item_id,
                sum(quantity) as quantity 
              from
                inventory_movements
              where
                "type_Moviment" = 'entry'
                and deleted_at is null
              group by
                item_id) as im_a on im_a.item_id = i.id
            inner join (
              select
                item_id,
                sum(quantity) as quantity 
              from
                inventory_movements
              where
                "type_Moviment" = 'output'
                and deleted_at is null
              group by
                item_id) as im_b on im_b.item_id = i.id
    ) as inventory_quantity
    order by
      percentageMinimumInventory asc;
    `,);

    return resultQuery;
  }

}

export { InventoryMovimentsRepository };
