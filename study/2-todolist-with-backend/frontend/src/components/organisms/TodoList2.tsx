import { Todo } from "../../state/state"
import { Todo as TodoItem } from "../atoms/Todo2"

type TodoListProps = {
  todos: Todo[]
  changeTodoStatus: (id: number) => void
}

export const TodoList2 = ({ todos, changeTodoStatus }: TodoListProps) => {
  return (
    <div>
      {todos.map(({ id, title, isFinished }) => (
        <TodoItem {...{ id, title, isFinished, changeTodoStatus }} key={id} />
      ))}
    </div>
  )
}
