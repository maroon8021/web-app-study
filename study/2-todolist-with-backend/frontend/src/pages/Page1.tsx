import "../styles/page-1.css"
import { ChangeEvent, useState } from "react"

//　型について https://typescript-jp.gitbook.io/deep-dive/type-system
type Todo = {
  id: number
  title: string
}

export const Page1 = () => {
  // アロー関数 https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Functions/Arrow_functions

  // useState
  // https://ja.reactjs.org/docs/hooks-overview.html
  // https://ja.reactjs.org/docs/hooks-state.html
  const [inputValue, setInputValue] = useState<string>("")
  const [todos, setTodos] = useState<Todo[]>([])

  const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    //ChangeEvent https://qiita.com/Takepepe/items/f1ba99a7ca7e66290f24
    setInputValue(e.target.value)
  }

  const onClickCreateButton = () => {
    const id = new Date().getTime() //ちょっと面倒だったので一旦時間で生成する
    setTodos([...todos, { id, title: inputValue }]) // スプレッド構文(とついでに分割代入) https://qiita.com/FumioNonaka/items/58358a29850afd7a0f37
    setInputValue("")
  }

  const deleteTodo = (id: number) => {
    const remainingTodos = todos.filter((todo) => {
      // 下のほうにある map もそうだがjsのarrayのmethodは使いこなせる必要ありそう https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array#instance_methods
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
