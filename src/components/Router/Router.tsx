import { BrowserRouter, Switch, Route } from 'react-router-dom';
import LoginPage from '../LoginPage/LoginPage';

const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/login' component={LoginPage} />
            </Switch>
        </BrowserRouter>
    )
}

export default Router;