import {Redirect, Route} from 'react-router-dom';
import {useSelector} from 'react-redux';
import PrivateLayout from '../components/common/PrivateLayout';

const PrivateRoute = ({component: Component, ...rest}) => {
	const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

	return (
		<PrivateLayout>
			<Route
				{...rest}
				render={props => {
					return isAuthenticated ? (
						<Component {...props} />
					) : (
						<Redirect to='/' />
					);
				}}
			/>
		</PrivateLayout>
	);
};

export default PrivateRoute;
