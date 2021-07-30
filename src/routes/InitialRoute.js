import {Redirect, Route} from 'react-router-dom';
import {useSelector} from 'react-redux';
import Layout from '../components/common/Layout';

const InitialRoute = ({component: Component, ...rest}) => {
	const isInitial = useSelector(state => state.auth.isInitial);

	return (
		<Layout>
			<Route
				{...rest}
				render={props => {
					return isInitial ? <Component {...props} /> : <Redirect to='/' />;
				}}
			/>
		</Layout>
	);
};

export default InitialRoute;
