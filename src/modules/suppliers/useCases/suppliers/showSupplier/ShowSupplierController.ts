import { Request, Response } from "express";
import { container } from "tsyringe";
import { ShowSupplierUseCase } from "./ShowSupplierUseCase";


class ShowSupplierController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const showSupplierUseCase = container.resolve(ShowSupplierUseCase);

    const supplier = await showSupplierUseCase.execute(id);

    return response.json(supplier);

  }
}

export { ShowSupplierController };