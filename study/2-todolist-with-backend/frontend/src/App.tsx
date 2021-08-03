import { useReducer } from "react"
import { Router } from "./Router"
import { TodoContext } from "./state/context"
import { reducer } from "./state/reducer"
import { initialState } from "./state/state"

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <TodoContext.Provider value={{ state, dispatch }}>
      <Router />
    </TodoContext.Provider>
  )
}

export default App
