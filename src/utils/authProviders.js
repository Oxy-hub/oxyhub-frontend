import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from 'react-icons/fa';
import * as authHelpers from './authHelpers';

const size = '20px';
const authProviders = [
  {
    name: 'Google',
    text: 'Login With Google',
    icon: <FcGoogle size={size} />,
    background: 'transparent',
    color: '#414141',
    helper: authHelpers.googleAuthHelper
  },
  {
    name: 'Github',
    text: 'Login With Github',
    icon: <FaGithub size={size} />,
    background: '#000000',
    color: '#ffffff',
    helper: authHelpers.githubAuthHelper
  }
];

export default authProviders;
