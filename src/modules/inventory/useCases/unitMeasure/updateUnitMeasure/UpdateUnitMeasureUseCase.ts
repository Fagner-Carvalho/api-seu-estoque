import { inject, injectable } from "tsyringe";

import { ICreateUnitMeasureDTO } from "@modules/inventory/dtos/ICreateUnitMeasureDTO";
import { IUnitMeasuresRepository } from "@modules/inventory/repositories/IUnitMeasuresRepository";
import { AppError } from "@shared/errors/AppError";

@injectable()
class UpdateUnitMeasureUseCase {
  constructor(
    @inject("UnitMeasuresRepository")
    private unitMeasuresRespository: IUnitMeasuresRepository
  ) { }

  async execute(
    id: string,
    {
      name,
      abbreviation,
    }: ICreateUnitMeasureDTO): Promise<void> {
    const unitMeasureAlreadyExists = await this.unitMeasuresRespository.findById(id);

    if (!unitMeasureAlreadyExists) {
      throw new AppError("UnitMeasure not exists!");
    }

    await this.unitMeasuresRespository.updateById(id, {
      name,
      abbreviation,
    });
  }
}

export { UpdateUnitMeasureUseCase };
