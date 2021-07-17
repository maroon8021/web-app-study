import "../styles/page-1.css"
import { ChangeEvent, useState } from "react"

type Todo = {
  id: number
  title: string
}

export const Page1 = () => {
  const [inputValue, setInputValue] = useState<string>("")
  const [todos, setTodos] = useState<Todo[]>([])

  const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
  }

  const onClickCreateButton = () => {
    const id = new Date().getTime() //ちょっと面倒だったので一旦時間で生成する
    setTodos([...todos, { id, title: inputValue }])
    setInputValue("")
  }

  const deleteTodo = (id: number) => {
    const remainingTodos = todos.filter((todo) => {
      return todo.id !== id
    })

    setTodos(remainingTodos)
  }

  return (
    <div className="container">
      <h1>Todo List -- Frontend Only</h1>
      <div className="input-area">
        <div className="input-area-left">
          <input type="text" value={inputValue} onChange={onChangeInput} />
        </div>
        <div className="input-area-right">
          <button onClick={onClickCreateButton}>Create Todo</button>
        </div>
      </div>

      <div className="todos">
        {todos.map((todo) => {
          return (
            <div className="todo" key={todo.id}>
              <div className="todo-left">
                <button
                  onClick={() => {
                    deleteTodo(todo.id)
                  }}
                >
                  ☓
                </button>
              </div>
              <div className="todo-right">{todo.title}</div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
