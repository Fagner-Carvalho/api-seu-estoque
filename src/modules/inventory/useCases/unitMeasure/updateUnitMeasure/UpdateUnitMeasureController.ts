import { Request, Response } from "express";
import { container } from "tsyringe";

import { UpdateUnitMeasureUseCase } from "./UpdateUnitMeasureUseCase";

class UpdateUnitMeasureController {
  async handle(request: Request, response: Response): Promise<Response> {
    const {
      name,
      abbreviation
    } = request.body;
    const { id } = request.params;

    const updateUnitMeasureUseCase = container.resolve(UpdateUnitMeasureUseCase);

    await updateUnitMeasureUseCase.execute(id, {
      name,
      abbreviation
    });

    return response.status(201).send();
  }
}

export { UpdateUnitMeasureController };
