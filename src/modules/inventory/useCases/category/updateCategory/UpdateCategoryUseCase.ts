import { inject, injectable } from "tsyringe";

import { ICreateCategoryDTO } from "@modules/inventory/dtos/ICreateCategoryDTO";
import { ICategoriesRepository } from "@modules/inventory/repositories/ICategoriesRepository";
import { AppError } from "@shared/errors/AppError";

@injectable()
class UpdateCategoryUseCase {
  constructor(
    @inject("CategoriesRepository")
    private categoriesRespository: ICategoriesRepository
  ) { }

  async execute(
    id: string,
    {
      name,
      description,
    }: ICreateCategoryDTO): Promise<void> {
    const categoryAlreadyExists = await this.categoriesRespository.findById(id);

    if (!categoryAlreadyExists) {
      throw new AppError("Category not exists!");
    }

    await this.categoriesRespository.updateById(id, {
      name,
      description,
    });
  }
}

export { UpdateCategoryUseCase };
