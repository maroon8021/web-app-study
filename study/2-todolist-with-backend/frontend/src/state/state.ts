export type Todo = {
  id: number
  title: string
  isFinished: boolean
}

export type State = {
  todolist: Todo[]
}

export const initialState: State = { todolist: [] }
