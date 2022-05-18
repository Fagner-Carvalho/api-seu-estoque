import { inject, injectable } from "tsyringe";

import { ICreateCategoryDTO } from "@modules/inventory/dtos/ICreateCategoryDTO";
import { ICategoriesRepository} from "@modules/inventory/repositories/ICategoriesRepository";
import { AppError } from "@shared/errors/AppError";

@injectable()
class CreateCategoryUseCase {
  constructor(
    @inject("CategoriesRepository")
    private categoriesRespository: ICategoriesRepository
  ) { }

  async execute({
    name,
    description
  }: ICreateCategoryDTO): Promise<void> {
    const categoryAlreadyExists = await this.categoriesRespository.findByName(name);

    if (categoryAlreadyExists) {
      throw new AppError("Category already exists!");
    }

    await this.categoriesRespository.create({
      name,
      description,
    });
  }
}

export { CreateCategoryUseCase };
