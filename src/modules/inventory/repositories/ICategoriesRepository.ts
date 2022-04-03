import { Category } from "../infra/typeorm/entities/category";

interface ICategoriesRepository {
  findAll(): Promise<Category[]>;
}

export { ICategoriesRepository };
