import { Request, Response } from "express";
import { container } from "tsyringe";

import { UpdateinventoryMovimentUseCase } from "./UpdateInventoryMovimentUseCase";

class UpdateInventoryMovimentController {
  async handle(request: Request, response: Response): Promise<Response> {
    const {
      item_id,
      supplier_id,
      type_Moviment,
      quantity,
      unit_price,
      total_price,
    } = request.body;
    const { id } = request.params;

    const updateInventoryMovimentUseCase = container.resolve(UpdateinventoryMovimentUseCase);

    await updateInventoryMovimentUseCase.execute(id, {
      item_id,
      supplier_id,
      type_Moviment,
      quantity,
      unit_price,
      total_price,
    });

    return response.status(201).send();
  }
}

export { UpdateInventoryMovimentController };
