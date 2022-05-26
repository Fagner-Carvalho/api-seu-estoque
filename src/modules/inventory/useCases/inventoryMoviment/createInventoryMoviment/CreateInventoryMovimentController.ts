import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateInventoryMovimentUseCase } from "./CreateInventoryMovimentUseCase";

class CreateInventoryMovimentController {
  async handle(request: Request, response: Response): Promise<Response> {
    
    const {
      item_id,
      supplier_id,
      type_Moviment,
      quantity,
      unit_price,
      total_price
    } = request.body;
    
    const createInventoryMovimentUseCase = container.resolve(CreateInventoryMovimentUseCase);
    
    await createInventoryMovimentUseCase.execute({
      item_id,
      supplier_id,
      type_Moviment,
      quantity,
      unit_price,
      total_price
    });

    return response.status(201).send();
  }
}

export { CreateInventoryMovimentController };
