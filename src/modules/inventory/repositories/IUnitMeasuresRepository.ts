import { ICreateUnitMeasureDTO } from "../dtos/ICreateUnitMeasureDTO";
import { UnitMeasure } from "../infra/typeorm/entities/unitMeasure";

interface IUnitMeasuresRepository {
  findAll(): Promise<UnitMeasure[]>;
  create(data: ICreateUnitMeasureDTO): Promise<UnitMeasure>;
  updateById(id: string, data: ICreateUnitMeasureDTO): Promise<void>;
  findByName(name: string): Promise<UnitMeasure>;
  findById(id: string): Promise<UnitMeasure>;
  findAll(): Promise<UnitMeasure[]>;
  delete(id: string): Promise<void>;
}

export { IUnitMeasuresRepository };
