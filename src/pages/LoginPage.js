import { Helmet } from 'react-helmet';
import { Redirect } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { updateAuth } from '../store/actions/auth';
import useFetch from '../hooks/useFetch';
import Login from '../components/Login';
import Loading from '../components/common/Loader';

const LoginPage = () => {
  return (
    <>
      <Helmet title='Welcome! - Oxyhub' />
      <Login />
    </>
  );
};

export default LoginPage;
