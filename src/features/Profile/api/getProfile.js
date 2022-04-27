import { useQuery } from 'react-query';
import axios from '../../../lib/axios';

export const fetchProfile = () => axios.get('/users/me').then(res => res.data);

const useGetProfile = () =>
  useQuery(['profileDetails'], fetchProfile, {
    // cacheTime: Infinity,
    // staleTime: Infinity
  });

export default useGetProfile;
