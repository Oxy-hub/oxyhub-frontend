import {Redirect} from 'react-router-dom';
import {useSelector} from 'react-redux';
import Login from '../components/Login';

const LoginPage = () => {
	const {isInitial, isAuthenticated} = useSelector(state => state.auth);

	if (isInitial) {
		return <Redirect to='/register' />;
	} else if (isAuthenticated) {
		return <Redirect to='/app' />;
	} else {
		return <Login />;
	}
};

export default LoginPage;
