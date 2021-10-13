import { BrowserRouter, Switch, Route } from 'react-router-dom';
import LoginPage from '../LoginPage/LoginPage';
import RegisterPage from '../RegisterPage/RegisterPage';

const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/login' component={LoginPage} />
                <Route exact path='/register' component={RegisterPage} />
            </Switch>
        </BrowserRouter>
    )
}

export default Router;