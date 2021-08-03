import { Todo } from "../../pages/Page2"
import { Todo as TodoItem } from "../atoms/Todo"

type TodoListProps = {
  todos: Todo[]
  deleteTodo: (id: number) => void
}

export const TodoList = ({ todos, deleteTodo }: TodoListProps) => {
  return (
    <div>
      {todos.map(({ id, title }) => (
        <TodoItem {...{ id, title, deleteTodo }} key={id} />
      ))}
    </div>
  )
}
