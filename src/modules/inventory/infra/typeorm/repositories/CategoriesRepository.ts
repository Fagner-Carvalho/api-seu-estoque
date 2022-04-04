import { getRepository, Repository } from "typeorm";

import { Category } from "@modules/inventory/infra/typeorm/entities/category";
import { ICategoriesRepository } from "@modules/inventory/repositories/ICategoriesRepository";

class CategoriesRepository implements ICategoriesRepository {
  private repository: Repository<Category>;

  constructor() {
    this.repository = getRepository(Category);
  }

  async findAll(): Promise<Category[]> {
    const categories = await this.repository.find();
    return categories;
  }

}

export { CategoriesRepository };
