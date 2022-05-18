import { Request, Response } from "express";
import { container } from "tsyringe";
import { ShowUnitMeasureUseCase } from "./ShowUnitMeasureUseCase";


class ShowUnitMeasureController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const showUnitMeasureUseCase = container.resolve(ShowUnitMeasureUseCase);

    const unitMeasure = await showUnitMeasureUseCase.execute(id);

    return response.json(unitMeasure);

  }
}

export { ShowUnitMeasureController };