export type ActionType = "AddTodo"

export type AddTodo = {
  type: "AddTodo"
  payload: { id: number; title: string }
}

export type ChangeTodoStatus = {
  type: "ChangeTodoStatus"
  payload: { id: number }
}

export type Actions = AddTodo | ChangeTodoStatus
