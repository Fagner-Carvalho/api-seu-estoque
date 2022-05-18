import { ICategoriesRepository } from "@modules/inventory/repositories/ICategoriesRepository";
import { inject, injectable } from "tsyringe";

@injectable()
class DeleteCategoryUseCase {
  constructor(
    @inject("CategoriesRepository")
    private categoriesRepository: ICategoriesRepository
  ) { }

  async execute(id: string): Promise<void> {
    await this.categoriesRepository.delete(id)
    return;
  };
};

export { DeleteCategoryUseCase };