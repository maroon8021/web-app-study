import { BrowserRouter, Switch, Route } from "react-router-dom"
import { Home } from "./pages/Home"
import { Page1 } from "./pages/Page1"

export const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/page-1">
          <Page1 />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}
