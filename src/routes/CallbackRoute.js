import { Redirect, Route } from 'react-router-dom';

const CallbackRoute = ({ component: Component, ...rest }) => {
  const isLoggingIn = localStorage.getItem('isLoggingIn');

  return (
    <Route
      {...rest}
      render={props => {
        return isLoggingIn ? <Component {...props} /> : <Redirect to='/' />;
      }}
    />
  );
};

export default CallbackRoute;
