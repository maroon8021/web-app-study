import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreateUser1500000000001 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "user",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
            isGenerated: true,
            generationStrategy: "uuid",
          },
          {
            name: "name",
            type: "varchar",
          },
          {
            name: "user_type_id",
            type: "int",
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
        foreignKeys: [
          {
            columnNames: ["user_type_id"],
            referencedTableName: "user_type",
            referencedColumnNames: ["id"],
          },
        ],
      }),
      true
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("user")
  }
}
