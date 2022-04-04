import { inject, injectable } from "tsyringe";

import { ICreateItemDTO } from "@modules/inventory/dtos/ICreateItemDTO";
import { IItemsRepository } from "@modules/inventory/repositories/IItemsRepository";
import { AppError } from "@shared/errors/AppError";

@injectable()
class UpdateItemUseCase {
  constructor(
    @inject("ItemsRepository")
    private itemsRespository: IItemsRepository
  ) { }

  async execute(
    id: string,
    {
      name,
      category_id,
      unit_measure_id,
      minimum_inventory,
      status,
    }: ICreateItemDTO): Promise<void> {
    const itemAlreadyExists = await this.itemsRespository.findById(id);

    if (!itemAlreadyExists) {
      throw new AppError("Item not exists!");
    }

    await this.itemsRespository.updateById(id, {
      name,
      category_id,
      unit_measure_id,
      minimum_inventory,
      status,
    });
  }
}

export { UpdateItemUseCase };
