import {Route, Switch, Redirect} from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import InitialRoute from './InitialRoute';
import LoginPage from '../pages/LoginPage';
import Register from '../pages/Register';
import App from '../pages/App';

const Routes = () => {
	return (
		<Switch>
			{/* <Route exact path='/' component={Login} /> */}
			<PublicRoute exact path='/' component={LoginPage} />
			<InitialRoute path='/register' component={Register} />
			<PrivateRoute path='/app' component={App} />
			<Redirect from='/*' to='/' />
		</Switch>
	);
};

export default Routes;
