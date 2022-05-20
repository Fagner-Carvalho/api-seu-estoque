import { ICreateInventoryMovimentDTO } from "../dtos/ICreateInventoryMovimentDTO";
import { InventoryMoviment } from "../infra/typeorm/entities/inventoryMoviment";

interface IInventoryMovimentsRepository {
  findAll(): Promise<InventoryMoviment[]>;
  create(data: ICreateInventoryMovimentDTO): Promise<InventoryMoviment>;
  updateById(id: string, data: ICreateInventoryMovimentDTO): Promise<void>;
  findById(id: string): Promise<InventoryMoviment>;
  findAll(): Promise<InventoryMoviment[]>;
  delete(id: string): Promise<void>;
}

export { IInventoryMovimentsRepository };
