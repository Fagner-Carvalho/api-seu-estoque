import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateItemUseCase } from "./CreateItemUseCase";

class CreateItemController {
  async handle(request: Request, response: Response): Promise<Response> {
    const {
      name,
      category_id,
      unit_measure_id,
      minimum_inventory,
      status,
    } = request.body;

    const createItemUseCase = container.resolve(CreateItemUseCase);

    await createItemUseCase.execute({
      name,
      category_id,
      unit_measure_id,
      minimum_inventory,
      status,
    });

    return response.status(201).send();
  }
}

export { CreateItemController };
