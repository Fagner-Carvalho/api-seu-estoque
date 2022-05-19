import { Supplier } from "@modules/suppliers/infra/typeorm/entities/suppliers";
import { ISuppliersRepository } from "@modules/suppliers/repositories/ISuppliersRepository";
import { inject, injectable } from "tsyringe";

@injectable()
class ShowSupplierUseCase {
  constructor(
    @inject("SuppliersRepository")
    private suppliersRepository: ISuppliersRepository
  ) { }

  async execute(id: string): Promise<Supplier> {
    const supplier = await this.suppliersRepository.findById(id)

    return supplier;
  };
};

export { ShowSupplierUseCase };