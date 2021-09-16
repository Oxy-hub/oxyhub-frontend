import PropType from 'prop-types';
import { Redirect, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Layout from '../components/common/Layout';

const InitialRoute = ({ component: Component, ...rest }) => {
  const isInitial = useSelector(state => state.initialUser.isInitial);

  return (
    <Layout>
      <Route
        // eslint-disable-next-line
        {...rest}
        render={props =>
          // eslint-disable-next-line
          isInitial ? <Component {...props} /> : <Redirect to="/" />
        }
      />
    </Layout>
  );
};

export default InitialRoute;

InitialRoute.propTypes = {
  component: PropType.func.isRequired
};
