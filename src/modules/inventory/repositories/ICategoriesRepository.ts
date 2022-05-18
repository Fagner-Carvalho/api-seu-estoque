import { ICreateCategoryDTO } from "../dtos/ICreateCategoryDTO";
import { Category } from "../infra/typeorm/entities/category";

interface ICategoriesRepository {
  findAll(): Promise<Category[]>;
  create(data: ICreateCategoryDTO): Promise<Category>;
  updateById(id: string, data: ICreateCategoryDTO): Promise<void>;
  findByName(name: string): Promise<Category>;
  findById(id: string): Promise<Category>;
  findAll(): Promise<Category[]>;
  delete(id: string): Promise<void>;
}

export { ICategoriesRepository };
