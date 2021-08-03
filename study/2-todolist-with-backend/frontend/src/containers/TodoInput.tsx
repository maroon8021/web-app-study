import { ChangeEvent, Dispatch, FC, useState } from "react"
import { Todo } from "../pages/Page2"
import { TodoInput as Component } from "../components/organisms/TodoInput"

type TodoInputProps = {
  todos: Todo[]
  setTodos: Dispatch<React.SetStateAction<Todo[]>>
}

export const TodoInput: FC<TodoInputProps> = ({ todos, setTodos }) => {
  const [inputValue, setInputValue] = useState<string>("")

  const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
  }

  const onClickCreateButton = () => {
    const id = new Date().getTime()
    setTodos([...todos, { id, title: inputValue }])
    setInputValue("")
  }

  const props = { inputValue, onChangeInput, onClickCreateButton }

  return <Component {...props} />
}
