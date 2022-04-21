import { Category } from "@modules/inventory/infra/typeorm/entities/category";
import { ICategoriesRepository } from "@modules/inventory/repositories/ICategoriesRepository";
import { inject, injectable } from "tsyringe";

@injectable()
class ListCategoriesUseCase {
  constructor(
    @inject("CategoriesRepository")
    private categoriesRepository: ICategoriesRepository
  ) { }

  async execute(): Promise<Category[]> {
    const categories = await this.categoriesRepository.findAll()

    return categories;
  };
};

export { ListCategoriesUseCase };