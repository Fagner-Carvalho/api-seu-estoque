import { Request, Response } from "express";
import { container } from "tsyringe";
import { ReportInventoryValuePerItemUseCase } from "./ReportInventoryValuePerItemUseCase";


class ReportInventoryValuePerItemController {
  async handle(request: Request, response: Response): Promise<Response> {
    const reportInventoryValuePerItemUseCase = container.resolve(ReportInventoryValuePerItemUseCase);

    const dataReport = await reportInventoryValuePerItemUseCase.execute();

    return response.json(dataReport);

  }
}

export { ReportInventoryValuePerItemController };