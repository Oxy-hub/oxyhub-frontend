import React, { useState, useEffect } from 'react';
import { Heading, Container, Form } from './login.styled';
import firebase from 'firebase/app';
import 'firebase/auth';
const axios = require('axios');

const Login = () => {
  const [formState, setFormState] = useState({ phno: '', otp: '' });
  const [isSignedIn, setIsSignedIn] = useState(false);
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
          setIsSignedIn(true);
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
    </Container>
  );
};

export default Login;
