import {Redirect, Route} from 'react-router-dom';
import {useSelector} from 'react-redux';
import PrivateLayout from '../components/common/PrivateLayout';

const InitialRoute = ({component: Component, ...rest}) => {
	const isInitial = useSelector(state => state.auth.isInitial);

	return (
		<PrivateLayout>
			<Route
				{...rest}
				render={props => {
					return isInitial ? <Component {...props} /> : <Redirect to='/' />;
				}}
			/>
		</PrivateLayout>
	);
};

export default InitialRoute;
