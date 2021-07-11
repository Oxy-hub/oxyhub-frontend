import { Redirect, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';

const InitialRoute = ({ component: Component, ...rest }) => {
  const isInitial = useSelector(state => state.auth.isInitial);

  return (
    <Route
      {...rest}
      render={props => {
        return isInitial ? <Component {...props} /> : <Redirect to='/' />;
      }}
    />
  );
};

export default InitialRoute;
