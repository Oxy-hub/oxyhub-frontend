import { useEffect } from 'react';
import axios from 'axios';
const Callback = props => {
  const sendAuthToken = async code => {
    try {
      const response = await axios.get('http://localhost:8000/auth/github', {
        params: {
          code,
        },
        withCredentials: true,
      });
      props.history.push('/app');
    } catch (err) {
      console.log('Error while sending auth code : ', err);
      // props.history.push('/error')
    }
  };
  useEffect(() => {
    localStorage.removeItem('isLogginIn');
    const query = new URLSearchParams(props.location.search);
    const code = query.get('code');
    const state = query.get('state');

    if (code && localStorage.getItem('state') === state) {
      localStorage.removeItem('state');
      sendAuthToken(code);
    } else {
      // props.history.push('/error');
      props.history.push('/');
    }
  }, []);
  return <div>You are in Callback page</div>;
};

export default Callback;
