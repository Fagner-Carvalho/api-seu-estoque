import { Supplier } from "@modules/suppliers/infra/typeorm/entities/suppliers";
import { ISuppliersRepository } from "@modules/suppliers/repositories/ISuppliersRepository";
import { inject, injectable } from "tsyringe";

@injectable()
class ListSuppliersUseCase {
  constructor(
    @inject("SuppliersRepository")
    private suppliersRepository: ISuppliersRepository
  ) { }

  async execute(): Promise<Supplier[]> {
    const suppliers = await this.suppliersRepository.findAll()

    return suppliers;
  };
};

export { ListSuppliersUseCase };