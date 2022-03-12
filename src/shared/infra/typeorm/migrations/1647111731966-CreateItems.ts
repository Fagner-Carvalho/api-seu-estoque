import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateItems1647111731966 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "items",
        columns: [
          {
            name: "id",
            type: "uuid",
          },
          {
            name: "name",
            type: "varchar",
          },
          {
            name: "category_id",
            type: "varchar",
          },
          {
            name: "unit_measure_id",
            type: "varchar",
          },
          {
            name: "minimum_inventory",
            type: "decimal",
          },
          {
            name: "status",
            type: "boolean",
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
    await queryRunner.dropTable("items");
  }
}
