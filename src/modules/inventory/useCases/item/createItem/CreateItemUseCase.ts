import { hash } from "bcrypt";
import { inject, injectable } from "tsyringe";

import { ICreateItemDTO } from "@modules/inventory/dtos/ICreateItemDTO";
import { IItemsRepository } from "@modules/inventory/repositories/IItemsRepository";
import { AppError } from "@shared/errors/AppError";

@injectable()
class CreateItemUseCase {
  constructor(
    @inject("ItemsRepository")
    private itemsRespository: IItemsRepository
  ) { }

  async execute({
    name,
    category_id,
    unit_measure_id,
    minimum_inventory,
    status,
  }: ICreateItemDTO): Promise<void> {
    const userAlreadyExists = await this.itemsRespository.findByName(name);

    if (userAlreadyExists) {
      throw new AppError("Item already exists!");
    }

    await this.itemsRespository.create({
      name,
      category_id,
      unit_measure_id,
      minimum_inventory,
      status,
    });
  }
}

export { CreateItemUseCase };
