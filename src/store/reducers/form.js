import {
	STORE_PHONE,
	OTP_SEND,
	OTP_CONFIRMED,
	CLEAR_PHONE_NUMBER,
} from '../constants';

const initialState = {
	phone_number: '',
	otpSend: false,
	otpConfirmed: false,
};

const formReducer = (state = initialState, action) => {
	switch (action.type) {
		case STORE_PHONE:
			return {
				...state,
				phone_number: action.payload,
			};

		case OTP_SEND:
			return {
				...state,
				otpSend: true,
			};

		case OTP_CONFIRMED:
			return {
				...state,
				otpConfirmed: true,
			};

		case CLEAR_PHONE_NUMBER:
			return initialState;

		default:
			return state;
	}
};

export default formReducer;
