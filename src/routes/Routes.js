import {Switch, Redirect, Route} from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import InitialRoute from './InitialRoute';
import CallbackRoute from './CallbackRoute';

import Login from '../pages/LoginPage';
import Register from '../pages/RegisterPage';
import CallbackPage from '../pages/CallbackPage';
import App from '../pages/App';

import Loader from '../components/common/Loader';

const Routes = () => {
	return (
		<Switch>
			<PublicRoute exact path='/' component={Login} />
			<Route exact path='/loader' component={Loader} />
			<PrivateRoute path='/app' component={App} />
			<InitialRoute path='/register' component={Register} />
			<CallbackRoute path='/auth/github/callback' component={CallbackPage} />
			<Redirect from='/*' to='/' />
		</Switch>
	);
};

export default Routes;
