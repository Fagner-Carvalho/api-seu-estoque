import { Request, Response } from "express";
import { container } from "tsyringe";

import { UpdateItemUseCase } from "./UpdateItemUseCase";

class UpdateItemController {
  async handle(request: Request, response: Response): Promise<Response> {
    const {
      name,
      category_id,
      unit_measure_id,
      minimum_inventory,
    } = request.body;
    const { id } = request.params;

    const updateItemUseCase = container.resolve(UpdateItemUseCase);

    await updateItemUseCase.execute(id, {
      name,
      category_id,
      unit_measure_id,
      minimum_inventory
    });

    return response.status(201).send();
  }
}

export { UpdateItemController };
