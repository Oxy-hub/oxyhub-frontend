import PropType from 'prop-types';
import { Redirect, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Layout from '../components/common/Layout';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

  return (
    <Layout>
      <Route
        {...rest}
        render={props =>
          isAuthenticated ? <Component {...props} /> : <Redirect to="/" />
        }
      />
    </Layout>
  );
};

export default PrivateRoute;

PrivateRoute.propTypes = {
  component: PropType.element.isRequired
};
