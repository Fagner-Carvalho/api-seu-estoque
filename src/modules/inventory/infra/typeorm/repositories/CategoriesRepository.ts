import { getRepository, Repository } from "typeorm";

import { Category } from "@modules/inventory/infra/typeorm/entities/category";
import { ICategoriesRepository } from "@modules/inventory/repositories/ICategoriesRepository";
import { ICreateCategoryDTO } from "@modules/inventory/dtos/ICreateCategoryDTO";

class CategoriesRepository implements ICategoriesRepository {
  private repository: Repository<Category>;

  constructor() {
    this.repository = getRepository(Category);
  }
  
  async create({
    id,
    name,
    description,
  }: ICreateCategoryDTO): Promise<Category> {
    const category = this.repository.create({
      id,
      name,
      description,
    });

    await this.repository.save(category);

    return category;
  }

  async updateById(
    id: string,
    {
      name,
      description,
    }: ICreateCategoryDTO
  ): Promise<void> {
    await this.repository.update(
      id,
      {
        name,
        description,
      }
    );
  }

  async findByName(name: string): Promise<Category> {
    const category = await this.repository.findOne({ name });
    return category;
  }

  async findById(id: string): Promise<Category> {
    const category = await this.repository.findOne(id);
    return category;
  }

  async findAll(): Promise<Category[]> {
    const categories = await this.repository.find();
    return categories;
  }

  async delete(id: string): Promise<void> {
    await this.repository.softDelete(id);
  }

}

export { CategoriesRepository };
