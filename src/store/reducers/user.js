import {STORE_USER, REMOVE_USER} from '../constants';

const initialState = {
	first_name: null,
	middle_name: null,
	last_name: null,
	email: null,
};

const userReducer = (state = initialState, action) => {
	switch (action.type) {
		case STORE_USER:
			const {first_name, middle_name, last_name, email} = action.payload;
			return {
				...state,
				first_name,
				middle_name,
				last_name,
				email,
			};

		case REMOVE_USER:
			return initialState;

		default:
			return state;
	}
};

export default userReducer;
