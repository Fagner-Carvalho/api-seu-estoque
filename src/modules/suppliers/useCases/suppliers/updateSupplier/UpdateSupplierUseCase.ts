import { inject, injectable } from "tsyringe";

import { ICreateSupplierDTO } from "@modules/suppliers/dtos/ICreateSupplierDTO";
import { ISuppliersRepository } from "@modules/suppliers/repositories/ISuppliersRepository";
import { AppError } from "@shared/errors/AppError";

@injectable()
class UpdateSupplierUseCase {
  constructor(
    @inject("SuppliersRepository")
    private suppliersRespository: ISuppliersRepository
  ) { }

  async execute(
    id: string,
    {
      name,
      cnpj,
      email,
      phone,
    }: ICreateSupplierDTO): Promise<void> {
    const supplierAlreadyExists = await this.suppliersRespository.findById(id);

    if (!supplierAlreadyExists) {
      throw new AppError("Supplier not exists!");
    }

    await this.suppliersRespository.updateById(id, {
      name,
      cnpj,
      email,
      phone,
    });
  }
}

export { UpdateSupplierUseCase };
