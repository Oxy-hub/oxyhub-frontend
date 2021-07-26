import {STORE_USER, REMOVE_USER} from '../constants';

export const storeUser = data => {
	return {
		type: STORE_USER,
		payload: data,
	};
};

export const removeUser = () => {
	return {
		type: REMOVE_USER,
	};
};
