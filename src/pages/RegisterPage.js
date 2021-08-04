import {Helmet} from 'react-helmet';
import Register from '../components/Register';
const RegisterPage = () => {
	return (
		<>
			<Helmet title='One Last Step !' />
			<Register />
		</>
	);
};

export default RegisterPage;
