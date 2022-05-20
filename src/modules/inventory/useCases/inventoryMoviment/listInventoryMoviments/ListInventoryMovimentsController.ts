import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListInventoryMovimentsUseCase } from "./ListInventoryMovimentsUseCase";


class ListInventoryMovimentsController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listInventoryMovimentsUseCase = container.resolve(ListInventoryMovimentsUseCase);

    const inventoryMoviments = await listInventoryMovimentsUseCase.execute();

    return response.json(inventoryMoviments);

  }
}

export { ListInventoryMovimentsController };