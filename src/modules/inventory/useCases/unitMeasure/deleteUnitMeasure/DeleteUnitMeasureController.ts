import { Request, Response } from "express";
import { container } from "tsyringe";
import { DeleteUnitMeasureUseCase} from "./DeleteUnitMeasureUseCase";


class DeleteUnitMeasureController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const deleteUnitMeasureUseCase = container.resolve(DeleteUnitMeasureUseCase);

    await deleteUnitMeasureUseCase.execute(id);

    return response.status(201).send();

  }
}

export { DeleteUnitMeasureController };