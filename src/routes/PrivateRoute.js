import { Redirect, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

  return (
    <Route
      {...rest}
      render={props => {
        return isAuthenticated ? <Component {...props} /> : <Redirect to='/' />;
      }}
    />
  );
};

export default PrivateRoute;
