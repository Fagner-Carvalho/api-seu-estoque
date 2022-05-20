import { inject, injectable } from "tsyringe";

import { ICreateInventoryMovimentDTO } from "@modules/inventory/dtos/ICreateInventoryMovimentDTO";
import { IInventoryMovimentsRepository } from "@modules/inventory/repositories/IInventoryMovimentRepository";

@injectable()
class CreateInventoryMovimentUseCase {
  constructor(
    @inject("InventoryMovimentsRepository")
    private inventoryMovimentsRespository: IInventoryMovimentsRepository
  ) { }

  async execute({
    item_id,
    supplier_id,
    type_Moviment,
    quantity,
    unit_price,
    total_price,
  }: ICreateInventoryMovimentDTO): Promise<void> {

    await this.inventoryMovimentsRespository.create({
      item_id,
      supplier_id,
      type_Moviment,
      quantity,
      unit_price,
      total_price,
    });
  }
}

export { CreateInventoryMovimentUseCase };
