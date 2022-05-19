import { ISuppliersRepository } from "@modules/suppliers/repositories/ISuppliersRepository";
import { inject, injectable } from "tsyringe";

@injectable()
class DeleteSupplierUseCase {
  constructor(
    @inject("SuppliersRepository")
    private suppliersRepository: ISuppliersRepository
  ) { }

  async execute(id: string): Promise<void> {
    await this.suppliersRepository.delete(id)
    return;
  };
};

export { DeleteSupplierUseCase };