import { css } from "@emotion/react"
import { ChangeEvent } from "react"

type TodoInputProps = {
  inputValue: string
  onChangeInput: (e: ChangeEvent<HTMLInputElement>) => void
  onClickCreateButton: () => void
}

const inputArea = css`
  display: flex;
  margin-bottom: 32px;
`

const inputAreaReft = css`
  width: 80%;
`

const inputAreaReftInput = css`
  width: 100%;
`

export const TodoInput = ({
  inputValue,
  onChangeInput,
  onClickCreateButton,
}: TodoInputProps) => {
  return (
    <div css={inputArea}>
      <div css={inputAreaReft}>
        <input
          css={inputAreaReftInput}
          type="text"
          value={inputValue}
          onChange={onChangeInput}
        />
      </div>
      <div>
        <button onClick={onClickCreateButton}>Create Todo</button>
      </div>
    </div>
  )
}
