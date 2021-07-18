import {
	STORE_PHONE,
	OTP_SEND,
	OTP_CONFIRMED,
	CLEAR_PHONE_NUMBER,
} from '../constants';

export const storePhoneNumber = phone_number => {
	return {
		type: STORE_PHONE,
		payload: phone_number,
	};
};
