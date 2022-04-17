import { useQuery } from 'react-query';
import axiosInit from '../../../lib/axios';

export const fetchProfile = () => {
  const axios = axiosInit({});
  console.log('Axios', axios);
  return axios.get('/users/me').then(res => res.data);
};

const useGetProfile = () =>
  useQuery(['profileDetails'], fetchProfile, {
    cacheTime: Infinity,
    staleTime: Infinity
  });

export default useGetProfile;
