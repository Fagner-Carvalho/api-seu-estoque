import { InventoryMoviment } from "@modules/inventory/infra/typeorm/entities/inventoryMoviment";
import { IInventoryMovimentsRepository } from "@modules/inventory/repositories/IInventoryMovimentRepository";
import { inject, injectable } from "tsyringe";

@injectable()
class ReportInventoryQuantityUseCase {
  constructor(
    @inject("InventoryMovimentsRepository")
    private inventoryMovimentsRepository: IInventoryMovimentsRepository
  ) { }

  async execute(): Promise<InventoryMoviment[]> {
    const resultReport = await this.inventoryMovimentsRepository.reportInventoryQuantity()

    return resultReport;
  };
};

export { ReportInventoryQuantityUseCase };