import React from 'react';
import * as authHelpers from './authHelpers';
import {FcGoogle} from 'react-icons/fc';
import {FaGithub} from 'react-icons/fa';
const size = '18px';
const authProviders = [
	{
		provider: 'Google',
		text: 'Login With Google',
		icon: <FcGoogle size={size} />,
		background: 'transparent',
		color: '#000000',

		helper: authHelpers.googleAuthHelper,
	},
	{
		provider: 'Github',
		text: 'Login With Github',
		icon: <FaGithub size={size} />,
		background: '#000000',
		color: '#ffffff',
		helper: authHelpers.githubAuthHelper,
	},
];

export default authProviders;
