import { Tabs } from "../../components/organisms/Tabs"
import { TodoInput2 } from "../../containers/TodoInput2"
import { TodoList2 } from "../../containers/TodoList2"

export type Todo = {
  id: number
  title: string
}

export const Page3All = () => {
  return (
    <div className="container">
      <h1>Todo List -- Frontend Only -- All Lists</h1>
      <Tabs />
      <TodoInput2 />
      <TodoList2 listType="all" />
    </div>
  )
}
