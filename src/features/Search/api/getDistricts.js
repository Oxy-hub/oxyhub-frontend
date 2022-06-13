import { useQuery } from 'react-query';
import axios from '../../../lib/axios';

export const getDistricts = ({ queryKey }) =>
  axios.get(`/districts?state=${queryKey[1]}`).then(res => res.data);

export const useGetDistricts = stateId =>
  useQuery(['district', stateId], getDistricts, {
    staleTime: Infinity,
    cacheTime: Infinity,
    enabled: Boolean(stateId)
  });
