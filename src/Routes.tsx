import {
    BrowserRouter,
    Route,
    Switch
} from 'react-router-dom'
import Home from './pages/Home'
import PostDetails from './pages/Posts/PostDetails'

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/posts/:id" component={PostDetails} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;