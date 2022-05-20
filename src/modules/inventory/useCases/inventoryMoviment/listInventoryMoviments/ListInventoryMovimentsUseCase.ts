import { InventoryMoviment } from "@modules/inventory/infra/typeorm/entities/inventoryMoviment";
import { IInventoryMovimentsRepository } from "@modules/inventory/repositories/IInventoryMovimentRepository";
import { inject, injectable } from "tsyringe";

@injectable()
class ListInventoryMovimentsUseCase {
  constructor(
    @inject("InventoryMovimentsRepository")
    private inventoryMovimentsRepository: IInventoryMovimentsRepository
  ) { }

  async execute(): Promise<InventoryMoviment[]> {
    const inventoryMoviments = await this.inventoryMovimentsRepository.findAll()

    return inventoryMoviments;
  };
};

export { ListInventoryMovimentsUseCase };