import {Route, Switch, Redirect} from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import InitialRoute from './InitialRoute';
import CallbackRoute from './CallbackRoute';
import LoginPage from '../pages/LoginPage';
import Register from '../pages/Register';
import CallbackPage from '../pages/CallbackPage';
import ErrorPage from '../pages/ErrorPage';
import App from '../pages/App';

const Routes = () => {
	return (
		<Switch>
			<PublicRoute exact path='/' component={LoginPage} />
			<CallbackRoute path='/auth/github/callback' component={CallbackPage} />
			<InitialRoute path='/register' component={Register} />
			<PrivateRoute path='/app' component={App} />
			<Route path='/error' component={ErrorPage} />
			<Redirect from='/*' to='/' />
		</Switch>
	);
};

export default Routes;
