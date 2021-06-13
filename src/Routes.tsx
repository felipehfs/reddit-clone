import { BrowserRouter, Route, Switch } from "react-router-dom"
import Home from "./pages/Home"
import PostDetails from "./pages/Posts/PostDetails"
import Search from "./pages/Search"

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/posts/:id" component={PostDetails} />
        <Route path="/search/:term" component={Search} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
