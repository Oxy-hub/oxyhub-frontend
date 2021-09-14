import { useQuery } from 'react-query';
import axios from '../../../lib/axios';

export const getUser = () => axios.get('/user');

const useGetUser = () => useQuery('user', getUser);

export default useGetUser;
