import { ChangeEvent, FC, useState, useContext } from "react"
import { TodoInput as Component } from "../components/organisms/TodoInput"
import { TodoContext } from "../state/context"

export const TodoInput2: FC = () => {
  const { dispatch } = useContext(TodoContext)
  const [inputValue, setInputValue] = useState<string>("")

  const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
  }

  const onClickCreateButton = () => {
    const id = new Date().getTime()
    dispatch({
      type: "AddTodo",
      payload: {
        id,
        title: inputValue,
      },
    })
    setInputValue("")
  }

  const props = { inputValue, onChangeInput, onClickCreateButton }

  return <Component {...props} />
}
