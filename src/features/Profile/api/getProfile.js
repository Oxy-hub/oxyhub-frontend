import { useQuery } from 'react-query';
import axios from '../../../lib/axios';

export const fetchProfile = () => axios.get('/users/me').then(res => res.data);

export const useGetProfile = () =>
  useQuery(['profile'], fetchProfile, {
    cacheTime: Infinity,
    staleTime: Infinity
  });
