import { Item } from "@modules/inventory/infra/typeorm/entities/Item";
import { IItemsRepository } from "@modules/inventory/repositories/IItemsRepository";
import { inject, injectable } from "tsyringe";

@injectable()
class ListItemsUseCase {
  constructor(
    @inject("ItemsRepository")
    private itemsRepository: IItemsRepository
  ) { }

  async execute(): Promise<Item[]> {
    const items = await this.itemsRepository.findAll()

    return items;
  };
};

export { ListItemsUseCase };