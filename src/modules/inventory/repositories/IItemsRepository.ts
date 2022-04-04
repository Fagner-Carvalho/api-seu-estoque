import { ICreateItemDTO } from "../dtos/ICreateItemDTO";
import { Item } from "../infra/typeorm/entities/Item";

interface IItemsRepository {
  create(data: ICreateItemDTO): Promise<Item>;
  updateById(id: string, data: ICreateItemDTO): Promise<void>;
  findById(id: string): Promise<Item>;
  findByName(name: string): Promise<Item>;
  findAll(): Promise<Item[]>;
  delete(id: string): Promise<void>;
}

export { IItemsRepository };
