import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateUnitMeasureUseCase } from "./CreateUnitMeasureUseCase";

class CreateUnitMeasureController {
  async handle(request: Request, response: Response): Promise<Response> {
    const {
      name,
      abbreviation,
    } = request.body;

    const createUnitMeasureUseCase = container.resolve(CreateUnitMeasureUseCase);

    await createUnitMeasureUseCase.execute({
      name,
      abbreviation,
    });

    return response.status(201).send();
  }
}

export { CreateUnitMeasureController };
