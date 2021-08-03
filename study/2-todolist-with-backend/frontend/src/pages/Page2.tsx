import { useState } from "react"
import { TodoInput } from "../containers/TodoInput"
import { TodoList } from "../containers/TodoList"

export type Todo = {
  id: number
  title: string
}

export const Page2 = () => {
  const [todos, setTodos] = useState<Todo[]>([])

  const props = {
    todos,
    setTodos,
  }

  return (
    <div className="container">
      <h1>Todo List -- Frontend Only</h1>
      <TodoInput {...props} />
      <TodoList {...props} />
    </div>
  )
}
