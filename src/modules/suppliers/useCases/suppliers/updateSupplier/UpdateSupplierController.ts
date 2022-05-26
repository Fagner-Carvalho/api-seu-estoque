import { Request, Response } from "express";
import { container } from "tsyringe";

import { UpdateSupplierUseCase } from "./UpdateSupplierUseCase";

class UpdateSupplierController {
  async handle(request: Request, response: Response): Promise<Response> {
    const {
      name,
      cnpj,
      email,
      phone,
    } = request.body;
    const { id } = request.params;

    const updateSupplierUseCase = container.resolve(UpdateSupplierUseCase);

    await updateSupplierUseCase.execute(id, {
      name,
      cnpj,
      email,
      phone,
    });

    return response.status(201).send();
  }
}

export { UpdateSupplierController };
