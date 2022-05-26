import { InventoryMoviment } from "@modules/inventory/infra/typeorm/entities/inventoryMoviment";
import { IInventoryMovimentsRepository } from "@modules/inventory/repositories/IInventoryMovimentRepository";
import { inject, injectable } from "tsyringe";

@injectable()
class ReportInventoryValuePerItemUseCase {
  constructor(
    @inject("InventoryMovimentsRepository")
    private inventoryMovimentsRepository: IInventoryMovimentsRepository
  ) { }

  async execute(): Promise<InventoryMoviment[]> {
    const resultReport = await this.inventoryMovimentsRepository.reportInventoryValuePerItem()

    return resultReport;
  };
};

export { ReportInventoryValuePerItemUseCase };