import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreateUserType1500000000000 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`)

    await queryRunner.createTable(
      new Table({
        name: "user_type",
        columns: [
          {
            name: "id",
            type: "int",
            isPrimary: true,
          },
          {
            name: "name",
            type: "varchar",
            isUnique: true,
          },
          {
            name: "created_at",
            type: "timestamptz",
            default: "NOW()",
          },
          {
            name: "updated_at",
            type: "timestamptz",
            default: "NOW()",
          },
        ],
      }),
      true
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("user_type")
  }
}
