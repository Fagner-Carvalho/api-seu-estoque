import { Request, Response } from "express";
import { container } from "tsyringe";
import { ShowItemUseCase } from "./ShowItemUseCase";


class ShowItemController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const showItemUseCase = container.resolve(ShowItemUseCase);

    const item = await showItemUseCase.execute(id);

    return response.json(item);

  }
}

export { ShowItemController };