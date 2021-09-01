import PropType from 'prop-types';
import { Redirect, Route } from 'react-router-dom';

const CallbackRoute = ({ component: Component, ...rest }) => {
  const isLoggingIn = localStorage.getItem('isLoggingIn');

  return (
    <Route
      {...rest}
      render={props =>
        isLoggingIn ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  );
};

export default CallbackRoute;

CallbackRoute.propTypes = {
  component: PropType.element.isRequired
};
