import { useEffect } from 'react';
import { useParams, useLocation, useHistory, Redirect } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import useAuth from '../api/auth';
import Error from '../../../components/Error';

const Callback = () => {
  const dispatch = useDispatch();
  const { provider } = useParams();
  const { search } = useLocation();
  const history = useHistory();
  const { data, isSuccess, isError, mutate } = useAuth(dispatch);

  // Extract code and state from query string
  const query = new URLSearchParams(search);
  const code = query.get('code');
  const state = query.get('state');
  const inMemState = localStorage.getItem('state');
  localStorage.removeItem('state');

  console.log('Code', code);

  useEffect(() => {
    // When no code/state is present in query string,then redirect to the homepage
    if (code && state && inMemState === state) {
      mutate({ code, provider });
    } else {
      history.push('/');
    }
  }, []);

  if (isSuccess) {
    if (data.isInitial) {
      return <Redirect to="/register" />;
    }
    return <Redirect to="/search" />;
  }

  if (isError) {
    return <Error />;
  }

  return <h1>Logging you in ...</h1>;
};

export default Callback;
