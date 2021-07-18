import { css } from "@emotion/react"
import { Link } from "react-router-dom"

const container = css`
  width: 800px;
  margin: 0 auto;
`

const PageTitle = css`
  text-align: center;
  margin-bottom: 16px;
`

type Page = {
  title: string
  path: string
}

export const Home = () => {
  const pages: Page[] = [
    { title: "Page:1 simple todo list", path: "page-1" },
    {
      title: "Page:2 simple todo list with emotion & frontend architecture",
      path: "page-2",
    },
  ]
  return (
    <div css={container}>
      <h1 css={PageTitle}>Todo List -- Frontend Only</h1>
      <ul>
        {pages.map((page) => {
          return (
            <li key={page.path}>
              <Link to={page.path}>{page.title}</Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
