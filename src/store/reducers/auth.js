import {STORE_INITIAL_USER, STORE_USER} from '../constants';

const initialState = {
	email: null,
	first_name: null,
	last_name: null,
	id_number: null,
	id_type: null,
	isAuthenticated: false,
	isInitial: false,
};

const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case STORE_INITIAL_USER:
			return {
				...state,
				email: action.payload.email,
				isInitial: true,
			};

		case STORE_USER:
			const {first_name, last_name, id_number, id_type} = action.payload;
			return {
				...state,
				first_name,
				last_name,
				id_number,
				id_type,
				isAuthenticated: true,
				isInitial: false,
			};

		default:
			return state;
	}
};

export default authReducer;
