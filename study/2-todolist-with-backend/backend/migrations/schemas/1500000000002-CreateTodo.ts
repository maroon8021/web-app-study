import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreateTodo1500000000002 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "todo",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
            isGenerated: true,
            generationStrategy: "uuid",
          },
          {
            name: "title",
            type: "varchar",
          },
          {
            name: "is_finished",
            type: "boolean",
          },
          {
            name: "user_id",
            type: "uuid",
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
            columnNames: ["user_id"],
            referencedTableName: "user",
            referencedColumnNames: ["id"],
            onDelete: "CASCADE",
          },
        ],
      }),
      true
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("todo")
  }
}
