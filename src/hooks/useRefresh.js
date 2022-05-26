import { useDispatch } from 'react-redux';
import { useQuery } from 'react-query';
import axios from '../lib/axios';
import { storeAuthToken } from '../store/actions';

const refreshUser = () =>
  axios.get('/refresh', { skipAuthRefresh: true }).then(res => res.data);

const useRefresh = props => {
  const { onRefreshComplete } = props;
  const dispatch = useDispatch();

  useQuery('refresh', refreshUser, {
    retry: false,
    staleTime: Infinity,
    refetchOnMount: false,
    onSuccess: data => {
      dispatch(storeAuthToken(data.data.access_token));
    },
    onSettled: () => {
      onRefreshComplete();
    }
  });
};

export default useRefresh;
