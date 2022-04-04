import { UnitMeasure } from "@modules/inventory/infra/typeorm/entities/unitMeasure";
import { IUnitMeasuresRepository } from "@modules/inventory/repositories/IUnitMeasuresRepository";
import { inject, injectable } from "tsyringe";

@injectable()
class ListUnitMeasuresUseCase {
  constructor(
    @inject("UnitMeasuresRepository")
    private unitMeasureRepository: IUnitMeasuresRepository
  ) { }

  async execute(): Promise<UnitMeasure[]> {
    const unitMeasure = await this.unitMeasureRepository.findAll()

    return unitMeasure;
  };
};

export { ListUnitMeasuresUseCase };