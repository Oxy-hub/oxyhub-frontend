import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import AppRoutes from './components';
import Loading from '../components/common/Loader';
import useRefresh from '../hooks/useRefresh';
import { setLoader } from '../store/actions';

const Routes = () => {
  const isLoadingGlobal = useSelector(state => state.globalLoader);
  const dispatch = useDispatch();
  useRefresh(dispatch);

  useEffect(() => {
    dispatch(setLoader());
  }, []);

  if (isLoadingGlobal) {
    return <Loading />;
  }

  return <AppRoutes />;
};

export default Routes;
