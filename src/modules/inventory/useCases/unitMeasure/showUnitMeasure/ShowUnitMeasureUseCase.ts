import { UnitMeasure } from "@modules/inventory/infra/typeorm/entities/unitMeasure";
import { IUnitMeasuresRepository } from "@modules/inventory/repositories/IUnitMeasuresRepository";
import { inject, injectable } from "tsyringe";

@injectable()
class ShowUnitMeasureUseCase {
  constructor(
    @inject("UnitMeasuresRepository")
    private unitMeasuresRepository: IUnitMeasuresRepository
  ) { }

  async execute(id: string): Promise<UnitMeasure> {
    const unitMeasure = await this.unitMeasuresRepository.findById(id)

    return unitMeasure;
  };
};

export { ShowUnitMeasureUseCase };