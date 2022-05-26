import { IUnitMeasuresRepository } from "@modules/inventory/repositories/IUnitMeasuresRepository";
import { inject, injectable } from "tsyringe";

@injectable()
class DeleteUnitMeasureUseCase {
  constructor(
    @inject("UnitMeasuresRepository")
    private unitMeasuresRepository: IUnitMeasuresRepository
  ) { }

  async execute(id: string): Promise<void> {
    await this.unitMeasuresRepository.delete(id)
    return;
  };
};

export { DeleteUnitMeasureUseCase };