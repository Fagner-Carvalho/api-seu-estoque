import { inject, injectable } from "tsyringe";

import { ICreateUnitMeasureDTO } from "@modules/inventory/dtos/ICreateUnitMeasureDTO";
import { IUnitMeasuresRepository} from "@modules/inventory/repositories/IUnitMeasuresRepository";
import { AppError } from "@shared/errors/AppError";

@injectable()
class CreateUnitMeasureUseCase {
  constructor(
    @inject("UnitMeasuresRepository")
    private unitMeasuresRespository: IUnitMeasuresRepository
  ) { }

  async execute({
    name,
    abbreviation
  }: ICreateUnitMeasureDTO): Promise<void> {
    const categoryAlreadyExists = await this.unitMeasuresRespository.findByName(name);

    if (categoryAlreadyExists) {
      throw new AppError("UnitMeasure already exists!");
    }

    await this.unitMeasuresRespository.create({
      name,
      abbreviation,
    });
  }
}

export { CreateUnitMeasureUseCase };
