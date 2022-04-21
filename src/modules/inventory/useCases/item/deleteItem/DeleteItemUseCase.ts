import { IItemsRepository } from "@modules/inventory/repositories/IItemsRepository";
import { inject, injectable } from "tsyringe";

@injectable()
class DeleteItemUseCase {
  constructor(
    @inject("ItemsRepository")
    private itemsRepository: IItemsRepository
  ) { }

  async execute(id: string): Promise<void> {
    await this.itemsRepository.delete(id)
    return;
  };
};

export { DeleteItemUseCase };