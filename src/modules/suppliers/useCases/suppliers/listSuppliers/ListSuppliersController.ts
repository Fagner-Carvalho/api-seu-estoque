import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListSuppliersUseCase } from "./ListSuppliersUseCase";


class ListSuppliersController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listSuppliersUseCase = container.resolve(ListSuppliersUseCase);

    const suppliers = await listSuppliersUseCase.execute();

    return response.json(suppliers);

  }
}

export { ListSuppliersController };