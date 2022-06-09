import { useQuery } from 'react-query';
import axios from '../../../lib/axios';

export const getParlours = ({ queryKey }) =>
  axios
    .get(`/parlours?state=${queryKey[1]}&district=${queryKey[2]}`)
    .then(res => res.data);

export const useGetParlours = (stateId, district, options) =>
  useQuery(['parlours', stateId, district], getParlours, {
    staleTime: 0,
    cacheTime: 0,
    enabled: false,
    keepPreviousData: true,
    ...options
  });
