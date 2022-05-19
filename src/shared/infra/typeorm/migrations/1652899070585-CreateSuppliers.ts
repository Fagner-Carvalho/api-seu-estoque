import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateSuppliers1652899070585 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
          new Table({
            name: "suppliers",
            columns: [
              {
                name: "id",
                type: "varchar",
              },
              {
                name: "name",
                type: "varchar",
              },
              {
                name: "cnpj",
                type: "varchar",
                isUnique: true,
              },
              {
                name: "email",
                type: "varchar",
                isNullable: true,
              },
              {
                name: "phone",
                type: "varchar",
                isNullable: true,
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
        await queryRunner.dropTable("suppliers");
      }

}
