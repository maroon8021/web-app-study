import { Dispatch, FC } from "react"
import { Todo } from "../pages/Page2"
import { TodoList as Compomemt } from "../components/organisms/TodoList"

type TodoListProps = {
  todos: Todo[]
  setTodos: Dispatch<React.SetStateAction<Todo[]>>
}

export const TodoList: FC<TodoListProps> = ({ todos, setTodos }) => {
  const deleteTodo = (id: number) => {
    const remainingTodos = todos.filter((todo) => {
      return todo.id !== id
    })

    setTodos(remainingTodos)
  }

  const props = {
    todos,
    deleteTodo,
  }

  return <Compomemt {...props} />
}
