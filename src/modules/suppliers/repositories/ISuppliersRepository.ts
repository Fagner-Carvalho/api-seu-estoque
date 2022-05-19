import { ICreateSupplierDTO } from "../dtos/ICreateSupplierDTO";
import { Supplier } from "../infra/typeorm/entities/suppliers";

interface ISuppliersRepository {
  findAll(): Promise<Supplier[]>;
  create(data: ICreateSupplierDTO): Promise<Supplier>;
  updateById(id: string, data: ICreateSupplierDTO): Promise<void>;
  findByName(name: string): Promise<Supplier>;
  findById(id: string): Promise<Supplier>;
  findAll(): Promise<Supplier[]>;
  delete(id: string): Promise<void>;
}

export { ISuppliersRepository };
