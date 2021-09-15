import { Switch, Redirect } from 'react-router-dom';
// import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import InitialRoute from './InitialRoute';
import CallbackRoute from './CallbackRoute';

import Login from '../features/Login';
import Register from '../features/Register';
import CallbackPage from '../pages/CallbackPage';
// import App from '../pages/App';
import Search from '../features/Search';

const Routes = () => (
  <Switch>
    <PublicRoute exact path="/" component={Login} />

    <PublicRoute path="/search" component={Search} />
    <InitialRoute path="/register" component={Register} />
    <CallbackRoute path="/auth/github/callback" component={CallbackPage} />
    <Redirect from="/*" to="/" />
  </Switch>
);

export default Routes;
