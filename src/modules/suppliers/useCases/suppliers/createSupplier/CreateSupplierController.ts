import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateSupplierUseCase } from "./CreateSupplierUseCase";

class CreateSupplierController {
  async handle(request: Request, response: Response): Promise<Response> {
    
    const {
      name,
      cnpj,
      email,
      phone,
    } = request.body;
    
    const createSupplierUseCase = container.resolve(CreateSupplierUseCase);
    
    await createSupplierUseCase.execute({
      name,
      cnpj,
      email,
      phone,
    });

    return response.status(201).send();
  }
}

export { CreateSupplierController };
