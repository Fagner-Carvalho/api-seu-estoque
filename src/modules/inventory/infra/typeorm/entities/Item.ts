import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { v4 as uuidV4 } from "uuid";

@Entity("items")
class Item {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  category_id: string;

  @Column()
  unit_measure_id: string;

  @Column()
  minimum_inventory: number;

  @Column()
  status: boolean;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @DeleteDateColumn()
  deleted_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { Item };
