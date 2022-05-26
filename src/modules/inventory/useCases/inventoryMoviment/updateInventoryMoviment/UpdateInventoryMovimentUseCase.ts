import { inject, injectable } from "tsyringe";

import { ICreateInventoryMovimentDTO } from "@modules/inventory/dtos/ICreateInventoryMovimentDTO";
import { IInventoryMovimentsRepository } from "@modules/inventory/repositories/IInventoryMovimentRepository";
import { AppError } from "@shared/errors/AppError";

@injectable()
class UpdateinventoryMovimentUseCase {
  constructor(
    @inject("InventoryMovimentsRepository")
    private inventoryMovimentsRespository: IInventoryMovimentsRepository
  ) { }

  async execute(
    id: string,
    {
      item_id,
      supplier_id,
      type_Moviment,
      quantity,
      unit_price,
      total_price,
    }: ICreateInventoryMovimentDTO): Promise<void> {
    const inventoryMovimentAlreadyExists = await this.inventoryMovimentsRespository.findById(id);

    if (!inventoryMovimentAlreadyExists) {
      throw new AppError("Inventory Moviment not exists!");
    }

    await this.inventoryMovimentsRespository.updateById(id, {
      item_id,
      supplier_id,
      type_Moviment,
      quantity,
      unit_price,
      total_price,
    });
  }
}

export { UpdateinventoryMovimentUseCase };
