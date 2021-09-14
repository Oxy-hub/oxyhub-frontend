import PropType from 'prop-types';
import { Redirect, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Layout from '../components/common/Layout';

const PublicRoute = ({ component: Component, ...rest }) => {
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
  const isInitial = useSelector(state => state.auth.isInitial);

  return (
    <Layout>
      <Route
        // eslint-disable-next-line
        {...rest}
        render={props =>
          // eslint-disable-next-line
          !isAuthenticated && !isInitial ? (
            // eslint-disable-next-line
            <Component {...props} />
          ) : !isInitial ? (
            <Redirect to="/app" />
          ) : (
            <Redirect to="/register" />
          )
        }
      />
    </Layout>
  );
};

export default PublicRoute;

PublicRoute.propTypes = {
  component: PropType.func.isRequired
};
