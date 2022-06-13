import PropType from 'prop-types';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const PublicRoute = ({ children }) => {
  const { isAuthenticated, isInitial } = useSelector(state => state.auth);

  if (isAuthenticated) {
    return <Navigate to="/search" />;
  }

  if (isInitial) {
    return <Navigate to="/register" />;
  }

  return children;
};

export default PublicRoute;

PublicRoute.propTypes = {
  children: PropType.element.isRequired
};
