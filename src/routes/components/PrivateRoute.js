import { Navigate } from 'react-router-dom';
import PropType from 'prop-types';
import { useSelector } from 'react-redux';
// import Layout from '../../components/common/Layout';

const PrivateRoute = ({ children }) => {
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

  return isAuthenticated ? <>{children}</> : <Navigate to="/" />;
};

export default PrivateRoute;

PrivateRoute.propTypes = {
  children: PropType.element.isRequired
};
