import { useDispatch } from 'react-redux';
import { useQuery } from 'react-query';
import axiosInit from '../lib/axios';
import { storeAuthToken } from '../store/actions';

const refreshUser = () => {
  const axios = axiosInit({ authorized: false });
  return axios.get('/refresh').then(res => res.data);
};

const useRefresh = props => {
  const { onRefreshComplete } = props;
  const dispatch = useDispatch();

  useQuery('refresh', refreshUser, {
    retry: false,
    staleTime: Infinity,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    onSuccess: data => {
      dispatch(storeAuthToken(data.data.access_token));
    },
    onSettled: () => {
      onRefreshComplete();
    }
  });
};

export default useRefresh;
