import { css } from "@emotion/react"
import { Link } from "react-router-dom"

type Page = {
  title: string
  path: string
}

const tabs = css`
  display: flex;
  margin-bottom: 16px;
`

const tab = css`
  margin-right: 16px;
`

export const Tabs = () => {
  const pages: Page[] = [
    { title: "All", path: "page-3-all" },
    {
      title: "Finished",
      path: "page-3-finished",
    },
    {
      title: "Remaining",
      path: "page-3-remaining",
    },
  ]
  return (
    <div css={tabs}>
      {pages.map((page) => {
        return (
          <div key={page.path} css={tab}>
            <Link to={page.path}>{page.title}</Link>
          </div>
        )
      })}
    </div>
  )
}
