import { getRepository, Repository } from "typeorm";

import { Supplier } from "@modules/suppliers/infra/typeorm/entities/suppliers";
import { ISuppliersRepository } from "@modules/suppliers/repositories/ISuppliersRepository";
import { ICreateSupplierDTO } from "@modules/suppliers/dtos/ICreateSupplierDTO";

class SuppliersRepository implements ISuppliersRepository {
  private repository: Repository<Supplier>;

  constructor() {
    this.repository = getRepository(Supplier);
  }
  
  async create({
    id,
    name,
    cnpj,
    email,
    phone,
  }: ICreateSupplierDTO): Promise<Supplier> {
    const supplier = this.repository.create({
      id,
      name,
      cnpj,
      email,
      phone
    });

    await this.repository.save(supplier);

    return supplier;
  }

  async updateById(
    id: string,
    {
      name,
      cnpj,
      email,
      phone,
    }: ICreateSupplierDTO
  ): Promise<void> {
    await this.repository.update(
      id,
      {
        name,
        cnpj,
        email,
        phone,
      }
    );
  }

  async findByName(name: string): Promise<Supplier> {
    const supplier = await this.repository.findOne(name);
    return supplier;
  }

  async findById(id: string): Promise<Supplier> {
    const supplier = await this.repository.findOne(id);
    return supplier;
  }

  async findAll(): Promise<Supplier[]> {
    const categories = await this.repository.find();
    return categories;
  }

  async delete(id: string): Promise<void> {
    await this.repository.softDelete(id);
  }

}

export { SuppliersRepository };
