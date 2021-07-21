import {useEffect} from 'react';
import Loading from '../components/common/Loading';
import axios from 'axios';
const Callback = ({location, history}) => {
	const sendAuthToken = async code => {
		try {
			const response = await axios.get('http://localhost:8000/auth/github', {
				params: {
					code,
				},
				withCredentials: true,
			});
			history.push('/app');
		} catch (err) {
			history.push('/error');
		}
	};

	useEffect(() => {
		// Remove the isLoggedIn state from localstorage immediately on mount
		localStorage.removeItem('isLoggingIn');
		// Extract the query string parameters
		const query = new URLSearchParams(location.search);
		const code = query.get('code');
		const state = query.get('state');

		if (code && localStorage.getItem('state') === state) {
			// Remove OAuth state parameter immediately after confirmation
			localStorage.removeItem('state');
			//Make a call to the backend
			sendAuthToken(code);
		} else {
			history.push('/');
		}
	}, [history]);

	return <Loading />;
};

export default Callback;
