interface ICreateInventoryMovimentDTO {
  id?: string;
  item_id: string;
  supplier_id: string;
  type_Moviment: string;
  quantity: number;
  unit_price: number;
  total_price: number;
}

export { ICreateInventoryMovimentDTO };
