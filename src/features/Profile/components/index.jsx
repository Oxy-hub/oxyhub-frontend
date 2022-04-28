import { useEffect, useState } from 'react';
import { Box } from '@chakra-ui/react';
import UserProfile from './UserProfile';
import useGetProfile from '../api/getProfile';

const MyProfile = () => {
  const [response, setResponse] = useState({});
  const { data, isSuccess } = useGetProfile();

  useEffect(() => {
    if (data) {
      setResponse(data.data);
    }
  }, [data]);
  return (
    <Box>{isSuccess && response && <UserProfile response={response} />}</Box>
  );
};

export default MyProfile;
