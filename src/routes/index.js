import Routes from './Routes';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { updateAuth } from '../store/actions/auth';
import useFetch from '../hooks/useFetch';
import Loading from '../components/common/Loader';
const AppRoutes = () => {
  const dispatch = useDispatch();
  const fetchConfig = {
    endpoint: 'refresh',
    method: 'GET',
  };
  const { data, loadingOnMount } = useFetch(fetchConfig);
  useEffect(() => {
    if (data) dispatch(updateAuth(data));
  }, [data]);

  return loadingOnMount ? <Loading /> : <Routes />;
};

export default AppRoutes;
