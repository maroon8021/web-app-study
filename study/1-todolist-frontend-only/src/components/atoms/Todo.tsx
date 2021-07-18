import { css } from "@emotion/react"

type TodoProps = {
  id: number
  title: string
  deleteTodo: (id: number) => void
}

const todo = css`
  display: flex;
  padding: 10px;
  border: #333 solid 1px;
  border-radius: 3px;
  margin-bottom: 10px;
`

const todoLeft = css`
  margin-right: 10px;
`

export const Todo = ({ id, title, deleteTodo }: TodoProps) => {
  const onClick = () => {
    deleteTodo(id)
  }
  return (
    <div css={todo}>
      <div css={todoLeft}>
        <button onClick={onClick}>☓</button>
      </div>
      <div>{title}</div>
    </div>
  )
}
