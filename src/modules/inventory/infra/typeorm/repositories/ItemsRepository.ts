import { getRepository, Repository } from "typeorm";

import { ICreateItemDTO } from "@modules/inventory/dtos/ICreateItemDTO";
import { Item } from "@modules/inventory/infra/typeorm/entities/Item";
import { IItemsRepository } from "@modules/inventory/repositories/IItemsRepository";

class ItemsRepository implements IItemsRepository {
  private repository: Repository<Item>;

  constructor() {
    this.repository = getRepository(Item);
  }

  async create({
    id,
    name,
    category_id,
    unit_measure_id,
    minimum_inventory,
    status,
  }: ICreateItemDTO): Promise<Item> {
    const item = this.repository.create({
      id,
      name,
      category_id,
      unit_measure_id,
      minimum_inventory,
      status,
    });

    await this.repository.save(item);

    return item;
  }

  async updateById(
    id: string,
    {
      name,
      category_id,
      unit_measure_id,
      minimum_inventory,
    }: ICreateItemDTO
  ): Promise<void> {
    await this.repository.update(
      id,
      {
        id,
        name,
        category_id,
        unit_measure_id,
        minimum_inventory,
      }
    );
  }

  async findByName(name: string): Promise<Item> {
    const item = await this.repository.findOne({ name });
    return item;
  }

  async findById(id: string): Promise<Item> {
    const item = await this.repository.findOne(id);
    return item;
  }

  async findAll(): Promise<Item[]> {
    const item = await this.repository
      .createQueryBuilder("item")
      .innerJoinAndSelect("item.category", "category")
      .innerJoinAndSelect("item.unitMeasure", "unitMeasure")
      .getMany()

    return item;
  }

  async delete(id: string): Promise<void> {
    await this.repository.softDelete(id);
  }

}

export { ItemsRepository };
