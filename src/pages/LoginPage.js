import {Helmet} from 'react-helmet';
import Login from '../components/Login';

const LoginPage = () => {
	return (
		<>
			<Helmet title='Welcome! - Oxyhub' />
			<Login />
		</>
	);
};

export default LoginPage;
