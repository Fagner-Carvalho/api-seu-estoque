
import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreatePermissions1647111675380 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "permissions",
        columns: [
          {
            name: "id",
            type: "uuid",
          },
          {
            name: "user_id",
            type: "varchar",
          },
          {
            name: "menu_id",
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
    await queryRunner.dropTable("permissions");
  }
}
