import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Heading, Container, Form } from './login.styled';
import { getTokens } from '../../store/actions/getTokens';
import firebase from 'firebase/app';
import 'firebase/auth';

const Login = () => {
  const [formState, setFormState] = useState({ phno: '', otp: '' });
  const accessToken = useSelector(state => state.auth.accessToken);
  const dispatch = useDispatch();
  useEffect(() => {
    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('sign-in-button', {
      size: 'invisible',
      callback: response => {
        // reCAPTCHA solved, allow signInWithPhoneNumber.
        getOtp();
      },
    });
  }, []);

  const getOtp = () => {
    firebase
      .auth()
      .signInWithPhoneNumber(formState.phno, window.recaptchaVerifier)
      .then(confirmationResult => {
        // SMS sent. Prompt user to type the code from the message, then sign the
        // user in with confirmationResult.confirm(code).
        alert('Enter OTP !');
        window.confirmationResult = confirmationResult;
      })
      .catch(error => {
        // Error; SMS not sent
        // ...
        console.log('this is the err', error);
      });
  };

  const confirmOtp = () => {
    window.confirmationResult
      .confirm(formState.otp)
      .then(result => {
        // User signed in successfully.
        result.user.getIdToken().then(id => {
          console.log('on successful login id is : ', id);
          alert('You are signed in successfully');
          dispatch(getTokens(id));
        });

        // ...
      })
      .catch(error => {
        // User couldn't sign in (bad verification code?)
        // ...
      });
  };

  const updateForm = (value, name) => {
    setFormState({ ...formState, [name]: value });
  };

  console.log(formState);
  return (
    <Container>
      <Heading>Login</Heading>
      <Form onSubmit={e => e.preventDefault()}>
        <input
          type='text'
          name='phno'
          placeholder='Enter mobile number'
          value={formState.phno}
          onChange={e => updateForm(e.target.value, e.target.name)}
        />
        <br />
        <button id='sign-in-button' onClick={getOtp}>
          Get OTP
        </button>
        <br />
        <input
          type='text'
          name='otp'
          placeholder='Enter your OTP'
          value={formState.otp}
          onChange={e => updateForm(e.target.value, e.target.name)}
        />
        <br />
        <button onClick={confirmOtp}>Submit OTP</button>
      </Form>
      {accessToken && <h1>Welcome to our app</h1>}
    </Container>
  );
};

export default Login;
