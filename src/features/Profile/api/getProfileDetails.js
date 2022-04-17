import { useQuery } from 'react-query';
import axios from '../../../lib/axios';

export const getProfileDetails = props =>
  axios
    .get('/users/me', {
      headers: { Authorization: `Bearer ${props}` }
    })
    .then(res => res.data);

const useGetProfileDetails = token =>
  useQuery(['profileDetails', token], () => getProfileDetails(token), {
    cacheTime: Infinity,
    staleTime: Infinity
  });

export default useGetProfileDetails;
