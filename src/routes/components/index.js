import { Switch, Redirect } from 'react-router-dom';

// Routes Import
import InitialRoute from './InitialRoute';
import PublicRoute from './PublicRoute';
// import PrivateRoute from './PrivateRoute';

// Components Import
import Login from '../../features/Login';
import Register from '../../features/Register';
import Callback from '../../features/Callback';
import Search from '../../features/Search';
import MyProfile from '../../features/Profile';

const Routes = () => (
  <Switch>
    <PublicRoute exact path="/" component={Login} />
    <PublicRoute path="/auth/callback/:provider" component={Callback} />

    {/* <PrivateRoute path="/search" component={Search} /> */}
    <PublicRoute path="/search" component={Search} />

    {/* <PrivateRoute path="/myprofile" component={MyProfile} /> */}
    <PublicRoute path="/myprofile" component={MyProfile} />

    <InitialRoute path="/register" component={Register} />
    <Redirect from="/*" to="/" />
  </Switch>
);

export default Routes;
