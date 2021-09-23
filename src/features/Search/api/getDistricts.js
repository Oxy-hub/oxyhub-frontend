import { useQuery } from 'react-query';
import axios from '../../../lib/axios';

const getDistricts = ({ queryKey }) =>
  axios.get(`/districts?id=${queryKey[1]}`).then(res => res.data);

const useGetDistricts = stateId =>
  useQuery(['districts', stateId], getDistricts, {
    staleTime: Infinity,
    cacheTime: Infinity,
    enabled: false
  });

export default useGetDistricts;
