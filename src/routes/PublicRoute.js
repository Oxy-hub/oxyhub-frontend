import PropType from 'prop-types';
import { Redirect, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PublicRoute = ({ component: Component, ...rest }) => {
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
  const isInitial = useSelector(state => state.auth.isInitial);

  return (
    <Route
      {...rest}
      render={props =>
        // eslint-disable-next-line
        !isAuthenticated && !isInitial ? (
          <Component {...props} />
        ) : !isInitial ? (
          <Redirect to="/app" />
        ) : (
          <Redirect to="/register" />
        )
      }
    />
  );
};

export default PublicRoute;

PublicRoute.propTypes = {
  component: PropType.element.isRequired
};
