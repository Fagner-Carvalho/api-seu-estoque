import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateUnitMeasures1647111859538 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "unit_measures",
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
            name: "abbreviation",
            type: "varchar",
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
    await queryRunner.dropTable("unit_measures");
  }
}
