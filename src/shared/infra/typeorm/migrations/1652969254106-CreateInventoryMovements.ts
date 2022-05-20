import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateInventoryMoviments1652969254106 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
          new Table({
            name: "inventory_movements",
            columns: [
              {
                name: "id",
                type: "varchar",
                isPrimary: true
              },
              {
                name: "item_id",
                type: "varchar",
              },
              {
                name: "supplier_id",
                type: "varchar",
              },
              {
                name: "type_Moviment",
                type: "varchar",
              },
              {
                name: "quantity",
                type: "decimal",
              },
              {
                name: "unit_price",
                type: "decimal",
              },
              {
                name: "total_price",
                type: "decimal",
              },
              {
                name: "created_at",
                type: "timestamp",
                default: "now()",
              },
              {
                name: "updated_at",
                type: "timestamp",
                default: "now()",
              },
              {
                name: "deleted_at",
                type: "timestamp",
                isNullable: true,
              },
            ],
          })
        );
      }
    
      public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("inventory_movements");
      }

}
