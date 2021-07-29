import { FC, useContext } from "react"
import { TodoList2 as Compomemt } from "../components/organisms/TodoList2"
import { TodoContext } from "../state/context"

type TodoListProps = {
  listType: "all" | "remaining" | "finished"
}

export const TodoList2: FC<TodoListProps> = ({ listType }) => {
  const { state, dispatch } = useContext(TodoContext)
  const todos =
    listType === "all"
      ? state.todolist
      : state.todolist.filter((todo) => {
          if (listType === "remaining") {
            return !todo.isFinished
          } else if (listType === "finished") {
            return todo.isFinished
          }

          return true
        })
  const changeTodoStatus = (id: number) => {
    dispatch({
      type: "ChangeTodoStatus",
      payload: { id },
    })
  }

  const props = {
    todos,
    changeTodoStatus,
  }

  return <Compomemt {...props} />
}
