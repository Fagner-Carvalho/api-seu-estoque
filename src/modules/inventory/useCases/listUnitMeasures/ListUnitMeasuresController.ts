import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListUnitMeasuresUseCase } from "./ListUnitMeasuresUseCase";


class ListUnitMeasuresController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listUnitMeasuresUseCase = container.resolve(ListUnitMeasuresUseCase);

    const unitMeasures = await listUnitMeasuresUseCase.execute();

    return response.json(unitMeasures);

  }
}

export { ListUnitMeasuresController };