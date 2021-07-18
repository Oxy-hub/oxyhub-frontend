import {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import firebase from 'firebase/app';
import 'firebase/auth';
import {storePhoneNumber} from '../store/actions/form';
import {getUser} from '../store/actions/user';

const useFirebase = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('get-otp', {
			size: 'invisible',
			callback: response => {
				getOtp();
			},
		});
	}, []);

	const getOtp = async phone_number => {
		try {
			dispatch(storePhoneNumber(phone_number));
			phone_number = '+91' + phone_number;
			const confirmationResult = await firebase
				.auth()
				.signInWithPhoneNumber(phone_number, window.recaptchaVerifier);
			window.confirmationResult = confirmationResult;
		} catch (e) {
			// Display some error message about confirmation failure
			console.log('Firebase Error While Sending Otp');
			console.log(e);
		}
	};

	const confirmOtp = async otp => {
		try {
			// Confirm the OTP
			const result = await window.confirmationResult.confirm(otp);
			// Get the idToken
			const id = await result.user.getIdToken();
			// dispatch the getUser action with the id
			dispatch(getUser(id));
		} catch (e) {
			// Display some error message about confirmation failure
			console.log('Firebase Error While Confirming OTP');
			console.log(e);
		}
	};

	return {
		getOtp,
		confirmOtp,
	};
};

export default useFirebase;
