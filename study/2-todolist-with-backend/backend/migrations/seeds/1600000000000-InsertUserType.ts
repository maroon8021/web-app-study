import { MigrationInterface, QueryRunner, Table } from "typeorm"
import { UserType } from "../../src/domain/models"

const seeds = [
  new UserType({ id: 0, name: "member" }),
  new UserType({ id: 1, name: "admin" }),
]

export class InsertUserType1600000000000 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    const entityManager = queryRunner.manager
    const repository = entityManager.getRepository(UserType)
    await repository.save(seeds)
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    const entityManager = queryRunner.manager
    const repository = entityManager.getRepository(UserType)
    await repository.remove(seeds)
  }
}
