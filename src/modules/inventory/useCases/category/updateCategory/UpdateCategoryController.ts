import { Request, Response } from "express";
import { container } from "tsyringe";

import { UpdateCategoryUseCase } from "./UpdateCategoryUseCase";

class UpdateCategoryController {
  async handle(request: Request, response: Response): Promise<Response> {
    const {
      name,
      description
    } = request.body;
    const { id } = request.params;

    const updateCategoryUseCase = container.resolve(UpdateCategoryUseCase);

    await updateCategoryUseCase.execute(id, {
      name,
      description
    });

    return response.status(201).send();
  }
}

export { UpdateCategoryController };
