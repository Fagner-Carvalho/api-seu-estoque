import { getRepository, Repository } from "typeorm";

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

}

export { InventoryMovimentsRepository };
