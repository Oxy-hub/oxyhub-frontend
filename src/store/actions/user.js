import {STORE_USER, STORE_INITIAL_USER} from '../constants';
import axios from 'axios';

export const getUser = idToken => {
	return dispatch => {
		axios
			.post(
				'http://localhost:8000/auth',
				{
					idToken: idToken,
				},
				{withCredentials: true} //credentials : cookies.SSL certificate etc.
			)
			.then(response => {
				dispatch({
					type: response.data.first_name ? STORE_USER : STORE_INITIAL_USER,
					payload: response.data,
				});
			});
	};
};

export const registerUser = data => {
	const {first_name, last_name, id_type, id_number} = data;
	return async dispatch => {
		try {
			const response = await axios.post(
				'http://localhost:8000/register',
				{
					first_name,
					last_name,
					id_type,
					id_number,
				},
				{
					withCredentials: true,
				}
			);
			dispatch({
				type: STORE_USER,
				payload: response.data,
			});
		} catch (e) {
			console.log(e);
			console.log('Some error occured while registering user');
		}
	};
};
