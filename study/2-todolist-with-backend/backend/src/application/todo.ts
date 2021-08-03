import { getCustomRepository } from "typeorm"
import { Todo, User } from "../domain/models"
import { TodoRepository, UserRepository } from "../domain/repositories"

type UpdateTodoInput = {
  id: string
  title?: string
  isFinished?: boolean
}

export class TodoApplicationService {
  static async getTodosByUser(userId: string) {
    return getCustomRepository(TodoRepository).find({
      where: {
        userId,
      },
    })
  }

  static async getTodo(userId: string, todoId: string) {
    return getCustomRepository(TodoRepository).find({
      where: {
        id: todoId,
        userId,
      },
      relations: ["user"],
    })
  }

  static async createTodo(userId: string, title: string) {
    const user = await getCustomRepository(UserRepository).findOneOrFail(userId)

    return getCustomRepository(TodoRepository).save(
      new Todo({
        title,
        isFinished: false,
        user,
      })
    )
  }

  static async updateTodo(input: UpdateTodoInput) {
    const updateTodoProps = Object.keys(input).reduce((acc, cur) => {
      return cur
        ? {
            ...acc,
            ...{ [cur]: input[cur as keyof UpdateTodoInput] },
          }
        : acc
    }, {} as UpdateTodoInput)
    const todo = await getCustomRepository(TodoRepository).findOneOrFail({
      where: {
        id: input.id,
      },
    })

    return getCustomRepository(TodoRepository).save({
      ...todo,
      updateTodoProps,
    })
  }

  static async deleteTodo(todoId: string) {
    return getCustomRepository(TodoRepository).delete(todoId)
  }
}
