import { Request, Response } from "express";
import { container } from "tsyringe";
import { ShowUsersUseCase } from "./ShowUsersUseCase";


class ShowtUsersController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const showUsersUseCase = container.resolve(ShowUsersUseCase);

    const user = await showUsersUseCase.execute(id);

    return response.json(user);

  }
}

export { ShowtUsersController };