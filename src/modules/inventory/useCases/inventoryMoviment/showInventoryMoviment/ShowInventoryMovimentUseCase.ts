import { InventoryMoviment } from "@modules/inventory/infra/typeorm/entities/inventoryMoviment";
import { IInventoryMovimentsRepository } from "@modules/inventory/repositories/IInventoryMovimentRepository";
import { inject, injectable } from "tsyringe";

@injectable()
class ShowInventoryMovimentUseCase {
  constructor(
    @inject("InventoryMovimentsRepository")
    private InventoryMovimentsRepository: IInventoryMovimentsRepository
  ) { }

  async execute(id: string): Promise<InventoryMoviment> {
    const inventoryMoviment = await this.InventoryMovimentsRepository.findById(id)

    return inventoryMoviment;
  };
};

export { ShowInventoryMovimentUseCase };