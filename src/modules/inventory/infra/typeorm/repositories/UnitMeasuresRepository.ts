import { getRepository, Repository } from "typeorm";

import { UnitMeasure } from "@modules/inventory/infra/typeorm/entities/unitMeasure";
import { IUnitMeasuresRepository } from "@modules/inventory/repositories/IUnitMeasuresRepository";
import { ICreateUnitMeasureDTO } from "@modules/inventory/dtos/ICreateUnitMeasureDTO";

class UnitMeasuresRepository implements IUnitMeasuresRepository {
  private repository: Repository<UnitMeasure>;

  constructor() {
    this.repository = getRepository(UnitMeasure);
  }

  async create({
    id,
    name,
    abbreviation,
  }: ICreateUnitMeasureDTO): Promise<UnitMeasure> {
    const unitMeasure = this.repository.create({
      id,
      name,
      abbreviation,
    });

    await this.repository.save(unitMeasure);

    return unitMeasure;
  }

  async updateById(
    id: string,
    {
      name,
      abbreviation,
    }: ICreateUnitMeasureDTO
  ): Promise<void> {
    await this.repository.update(
      id,
      {
        name,
        abbreviation,
      }
    );
  }

  async findByName(name: string): Promise<UnitMeasure> {
    const unitMeasure = await this.repository.findOne({ name });
    return unitMeasure;
  }

  async findById(id: string): Promise<UnitMeasure> {
    const unitMeasure = await this.repository.findOne(id);
    return unitMeasure;
  }

  async findAll(): Promise<UnitMeasure[]> {
    const unitMeasures = await this.repository.find();
    return unitMeasures;
  }

  async delete(id: string): Promise<void> {
    await this.repository.softDelete(id);
  }

}

export { UnitMeasuresRepository };
