import { getRepository, Repository } from "typeorm";

import { UnitMeasure } from "@modules/inventory/infra/typeorm/entities/unitMeasure";
import { IUnitMeasuresRepository } from "@modules/inventory/repositories/IUnitMeasuresRepository";

class UnitMeasuresRepository implements IUnitMeasuresRepository {
  private repository: Repository<UnitMeasure>;

  constructor() {
    this.repository = getRepository(UnitMeasure);
  }

  async findAll(): Promise<UnitMeasure[]> {
    const unitMeasures = await this.repository.find();
    return unitMeasures;
  }

}

export { UnitMeasuresRepository };
