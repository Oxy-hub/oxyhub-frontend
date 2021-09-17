import PropType from 'prop-types';
import { Redirect, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PublicRoute = ({ component: Component, ...rest }) => {
  const isAuthenticated = useSelector(state => state.auth.isAuth);

  return (
    <Route
      // eslint-disable-next-line
      {...rest}
      render={props =>
        !isAuthenticated ? (
          // eslint-disable-next-line
          <Component {...props} />
        ) : (
          <Redirect to="/search" />
        )
      }
    />
  );
};

export default PublicRoute;

PublicRoute.propTypes = {
  component: PropType.func.isRequired
};
