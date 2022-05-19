import { inject, injectable } from "tsyringe";

import { ICreateSupplierDTO } from "@modules/suppliers/dtos/ICreateSupplierDTO";
import { ISuppliersRepository} from "@modules/suppliers/repositories/ISuppliersRepository";
import { AppError } from "@shared/errors/AppError";

@injectable()
class CreateSupplierUseCase {
  constructor(
    @inject("SuppliersRepository")
    private suppliersRespository: ISuppliersRepository
  ) { }

  async execute({
    name,
    cnpj,
    email,
    phone,
  }: ICreateSupplierDTO): Promise<void> {
    const supplierAlreadyExists = await this.suppliersRespository.findByName(name);

    if (supplierAlreadyExists) {
      throw new AppError("Supplier already exists!");
    }

    await this.suppliersRespository.create({
      name,
      cnpj,
      email,
      phone,
    });
  }
}

export { CreateSupplierUseCase };
