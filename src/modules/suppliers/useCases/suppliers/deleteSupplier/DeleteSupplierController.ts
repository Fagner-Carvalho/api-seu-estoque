import { Request, Response } from "express";
import { container } from "tsyringe";
import { DeleteSupplierUseCase} from "./DeleteSupplierUseCase";


class DeleteSupplierController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const deleteSupplierUseCase = container.resolve(DeleteSupplierUseCase);

    await deleteSupplierUseCase.execute(id);

    return response.status(201).send();

  }
}

export { DeleteSupplierController };