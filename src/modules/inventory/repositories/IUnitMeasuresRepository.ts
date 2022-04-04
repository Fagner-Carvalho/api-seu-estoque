import { UnitMeasure } from "../infra/typeorm/entities/unitMeasure";

interface IUnitMeasuresRepository {
  findAll(): Promise<UnitMeasure[]>;
}

export { IUnitMeasuresRepository };
