import { MigrationInterface, QueryRunner, Table } from "typeorm"
import { Todo, User } from "../../src/domain/models"
import { todo1, todo2, todo3 } from "./data/todo"
import { user1 } from "./data/user"

export class InsertTodo1700000000001 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    const entityManager = queryRunner.manager
    const userRepository = entityManager.getRepository(User)
    const user = await userRepository.findOneOrFail(user1.id)

    const todoRepository = entityManager.getRepository(Todo)

    const todos = [todo1, todo2, todo3].map(
      (todo) => new Todo({ ...todo, user })
    )
    await todoRepository.save(todos)
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    const entityManager = queryRunner.manager
    const repository = entityManager.getRepository(User)
    await repository.clear()
  }
}
