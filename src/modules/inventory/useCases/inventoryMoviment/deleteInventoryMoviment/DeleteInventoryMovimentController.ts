import { Request, Response } from "express";
import { container } from "tsyringe";
import { DeleteInventoryMovimentUseCase} from "./DeleteInventoryMovimentUseCase";


class DeleteInventoryMovimentController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const deleteInventoryMovimentUseCase = container.resolve(DeleteInventoryMovimentUseCase);

    await deleteInventoryMovimentUseCase.execute(id);

    return response.status(201).send();

  }
}

export { DeleteInventoryMovimentController };