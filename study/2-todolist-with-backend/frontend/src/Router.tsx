import { BrowserRouter, Switch, Route } from "react-router-dom"
import { Home } from "./pages/Home"
import { Page3All } from "./pages/page-3/all"
import { Page3Finished } from "./pages/page-3/finished"
import { Page3Remaining } from "./pages/page-3/remaining"
import { Page1 } from "./pages/Page1"
import { Page2 } from "./pages/Page2"

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
        <Route path="/page-2">
          <Page2 />
        </Route>

        <Route path="/page-3-all">
          <Page3All />
        </Route>
        <Route path="/page-3-finished">
          <Page3Finished />
        </Route>
        <Route path="/page-3-remaining">
          <Page3Remaining />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}
