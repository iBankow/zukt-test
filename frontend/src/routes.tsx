import { Switch } from 'react-router-dom';

import Login from './pages/Login';
import Home from './pages/Home';
import Register from './pages/Register';

import Route from './routes/Route';

const Routes = (): JSX.Element => {
    return (
        <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/register" component={Register} />
            <Route isPrivate path="/home" component={Home} />
        </Switch>
    )
}

export default Routes;