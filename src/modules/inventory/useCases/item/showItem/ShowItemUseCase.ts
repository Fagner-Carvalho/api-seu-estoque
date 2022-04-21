import { Item } from "@modules/inventory/infra/typeorm/entities/Item";
import { IItemsRepository } from "@modules/inventory/repositories/IItemsRepository";
import { inject, injectable } from "tsyringe";

@injectable()
class ShowItemUseCase {
  constructor(
    @inject("ItemsRepository")
    private itemsRepository: IItemsRepository
  ) { }

  async execute(id: string): Promise<Item> {
    const user = await this.itemsRepository.findById(id)

    return user;
  };
};

export { ShowItemUseCase };