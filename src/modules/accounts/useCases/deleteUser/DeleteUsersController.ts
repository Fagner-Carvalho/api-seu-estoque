import { Request, Response } from "express";
import { container } from "tsyringe";
import { DeleteUsersUseCase } from "./DeleteUsersUseCase";


class DeleteUsersController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const deleteUsersUseCase = container.resolve(DeleteUsersUseCase);

    await deleteUsersUseCase.execute(id);

    return response.status(201).send();

  }
}

export { DeleteUsersController };