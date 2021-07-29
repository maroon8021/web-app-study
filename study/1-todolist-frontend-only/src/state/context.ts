import { createContext, Dispatch } from "react"
import { Actions } from "./actions"
import { initialState, State } from "./state"

export const TodoContext = createContext<{
  state: State
  dispatch: Dispatch<Actions>
}>({
  state: initialState,
  dispatch: () => undefined,
})
