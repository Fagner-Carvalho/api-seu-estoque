import { IInventoryMovimentsRepository } from "@modules/inventory/repositories/IInventoryMovimentRepository";
import { inject, injectable } from "tsyringe";

@injectable()
class DeleteInventoryMovimentUseCase {
  constructor(
    @inject("InventoryMovimentsRepository")
    private inventoryMovimentsRepository: IInventoryMovimentsRepository
  ) { }

  async execute(id: string): Promise<void> {
    await this.inventoryMovimentsRepository.delete(id)
    return;
  };
};

export { DeleteInventoryMovimentUseCase };