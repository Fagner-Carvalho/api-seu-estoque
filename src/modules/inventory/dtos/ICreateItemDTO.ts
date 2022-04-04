interface ICreateItemDTO {
  id?: string;
  name: string;
  category_id: string;
  unit_measure_id: string;
  minimum_inventory?: number;
  status?: boolean
}

export { ICreateItemDTO };
