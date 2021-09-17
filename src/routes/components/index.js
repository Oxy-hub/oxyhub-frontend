import { Switch, Redirect } from 'react-router-dom';

// Routes Import
import InitialRoute from './InitialRoute';
import PublicRoute from './PublicRoute';
import PrivateRoute from './PrivateRoute';

// Components Import
import Login from '../../features/Login';
import Register from '../../features/Register';
import Callback from '../../features/Callback';
import Search from '../../features/Search';

const Routes = () => (
  <Switch>
    <PublicRoute exact path="/" component={Login} />
    <PublicRoute path="/auth/callback/:provider" component={Callback} />

    <PrivateRoute path="/search" component={Search} />

    <InitialRoute path="/register" component={Register} />
    <Redirect from="/*" to="/" />
  </Switch>
);

export default Routes;
