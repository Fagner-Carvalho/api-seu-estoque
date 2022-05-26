import { Request, Response } from "express";
import { container } from "tsyringe";
import { ShowInventoryMovimentUseCase } from "./ShowInventoryMovimentUseCase";


class ShowInventoryMovimentController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const showInventoryMovimentUseCase = container.resolve(ShowInventoryMovimentUseCase);

    const inventoryMoviment = await showInventoryMovimentUseCase.execute(id);

    return response.json(inventoryMoviment);

  }
}

export { ShowInventoryMovimentController };