import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { updateAuth } from '../store/actions/auth';
import Loader from '../components/common/Loader';
import AuthError from '../components/common/AuthError';
import useFetch from '../hooks/useFetch';

const Callback = ({ location, history }) => {
  const dispatch = useDispatch();
  const [authCode, setAuthCode] = useState(null);
  const { data, error, fetch } = useFetch();

  useEffect(() => {
    // Remove the isLoggedIn state from localstorage immediately on mount
    localStorage.removeItem('isLoggingIn');
    // Extract the query string parameters
    const query = new URLSearchParams(location.search);
    const code = query.get('code');
    const state = query.get('state');

    if (code && localStorage.getItem('state') === state) {
      // Remove OAuth state parameter immediately after confirmation
      localStorage.removeItem('state');
      // Make a call to the backend
      setAuthCode(code);
    } else {
      history.push('/');
    }
  }, [history, location.search]);

  useEffect(() => {
    if (authCode) {
      const fetchConfig = {
        endpoint: 'auth/github',
        method: 'POST',
        axiosConfig: {
          params: { code: authCode }
        }
      };
      fetch(fetchConfig);
    }
  }, [authCode, fetch]);

  useEffect(() => {
    if (data) {
      dispatch(updateAuth(data));
      // dispatch(storeUser(data.user));

      // eslint-disable-next-line
      data.isInitial ? history.push('/register') : history.push('/app');
    }
  }, [data, dispatch, history]);

  if (error) return <AuthError />;

  return <Loader />;
  Hello;
};

export default Callback;

Callback.propTypes = {
  location: PropTypes.node.isRequired,
  history: PropTypes.bool.isRequired
};
