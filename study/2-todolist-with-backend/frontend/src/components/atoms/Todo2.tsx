import { css } from "@emotion/react"

type TodoProps = {
  id: number
  title: string
  isFinished: boolean
  changeTodoStatus: (id: number) => void
}

const todo = css`
  display: flex;
  padding: 10px;
  border: #333 solid 1px;
  border-radius: 3px;
  margin-bottom: 10px;
`

const finishedTodo = css`
  ${todo}
  background-color: #7f7f7f;
`

const todoLeft = css`
  margin-right: 10px;
`

export const Todo = ({
  id,
  title,
  isFinished,
  changeTodoStatus,
}: TodoProps) => {
  const onClick = () => {
    changeTodoStatus(id)
  }
  return (
    <div css={isFinished ? finishedTodo : todo}>
      <div css={todoLeft}>
        <button onClick={onClick}>✔</button>
      </div>
      <div>{title}</div>
    </div>
  )
}
