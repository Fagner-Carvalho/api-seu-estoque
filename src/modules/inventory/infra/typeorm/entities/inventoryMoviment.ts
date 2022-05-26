import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, OneToOne, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { v4 as uuidV4 } from "uuid";
import { Item } from "./Item";
import { Supplier } from "@modules/suppliers/infra/typeorm/entities/suppliers";

@Entity("inventory_movements")
class InventoryMoviment {
  @PrimaryColumn()
  id: string;

  @Column()
  item_id: string;

  @Column()
  supplier_id: string;

  @Column()
  type_Moviment: string;

  @Column()
  quantity: number;

  @Column()
  unit_price: number;

  @Column()
  total_price: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @DeleteDateColumn()
  deleted_at: Date;

  @OneToOne(() => Item)
  @JoinColumn({ name: "item_id" })
  item: Item

  @OneToOne(() => Supplier)
  @JoinColumn({ name: "supplier_id" })
  supplier: Supplier

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { InventoryMoviment };
