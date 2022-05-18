import { Category } from "@modules/inventory/infra/typeorm/entities/category";
import { ICategoriesRepository } from "@modules/inventory/repositories/ICategoriesRepository";
import { inject, injectable } from "tsyringe";

@injectable()
class ShowCategoryUseCase {
  constructor(
    @inject("CategoriesRepository")
    private categoriesRepository: ICategoriesRepository
  ) { }

  async execute(id: string): Promise<Category> {
    const item = await this.categoriesRepository.findById(id)

    return item;
  };
};

export { ShowCategoryUseCase };