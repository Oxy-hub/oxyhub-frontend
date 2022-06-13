import PropType from 'prop-types';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const InitialRoute = ({ children }) => {
  const isInitial = useSelector(state => state.auth.isInitial);

  return isInitial ? children : <Navigate to="/" />;
};

export default InitialRoute;

InitialRoute.propTypes = {
  children: PropType.element.isRequired
};
