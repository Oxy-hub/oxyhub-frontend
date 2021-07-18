import {Redirect} from 'react-router-dom';
import {useSelector} from 'react-redux';
import Login from '../components/Login';
import useFirebase from '../hooks/useFirebase';

const LoginPage = () => {
	const {isInitial, isAuthenticated} = useSelector(state => state.auth);
	const firebaseAuthHelpers = useFirebase();

	if (isInitial) {
		return <Redirect to='/register' />;
	} else if (isAuthenticated) {
		return <Redirect to='/app' />;
	} else {
		return <Login {...firebaseAuthHelpers} />;
	}
};

export default LoginPage;
