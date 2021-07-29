import { Actions } from "./actions"
import { State } from "./state"

export const reducer = (state: State, action: Actions): State => {
  switch (action.type) {
    case "AddTodo": {
      const { id, title } = action.payload

      return { todolist: [...state.todolist, { id, title, isFinished: false }] }
    }

    case "ChangeTodoStatus": {
      const { id } = action.payload

      return {
        todolist: state.todolist.map((todo) => {
          if (todo.id !== id) {
            return todo
          }

          return {
            ...todo,
            isFinished: !todo.isFinished,
          }
        }),
      }
    }

    default:
      return state
  }
}
