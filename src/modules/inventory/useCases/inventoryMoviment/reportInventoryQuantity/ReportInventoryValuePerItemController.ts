import { Request, Response } from "express";
import { container } from "tsyringe";
import { ReportInventoryQuantityUseCase } from "./ReportInventoryQuantityUseCase";


class ReportInventoryQuantityController {
  async handle(request: Request, response: Response): Promise<Response> {
    const reportInventoryValuePerItemUseCase = container.resolve(ReportInventoryQuantityUseCase);

    const dataReport = await reportInventoryValuePerItemUseCase.execute();

    return response.json(dataReport);

  }
}

export { ReportInventoryQuantityController };