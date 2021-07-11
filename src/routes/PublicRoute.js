import { Redirect, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PublicRoute = ({ component: Component, ...rest }) => {
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

  return (
    <Route
      {...rest}
      render={props => {
        return !isAuthenticated ? <Component {...props} /> : <Redirect to='/app' />;
      }}
    />
  );
};

export default PublicRoute;
