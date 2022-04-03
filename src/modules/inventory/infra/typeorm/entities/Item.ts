import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, OneToOne, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { v4 as uuidV4 } from "uuid";
import { Category } from "./category";
import { UnitMeasure } from "./unitMeasure";

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

  @OneToOne(() => Category)
  @JoinColumn({ name: "category_id" })
  category: Category

  @OneToOne(() => UnitMeasure)
  @JoinColumn({ name: "unit_measure_id" })
  unitMeasure: UnitMeasure

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { Item };
