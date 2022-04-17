import { useEffect, useState } from 'react';
import { Box } from '@chakra-ui/react';
import UserProfile from './UserProfile';
import useGetProfile from '../api/getProfile';

const MyProfile = () => {
  const [response, setResponse] = useState({});
  const { data, isSuccess } = useGetProfile();

  console.log('Profile data : ', data);
  console.log('Profile success : ', isSuccess);

  useEffect(() => {
    if (data) {
      setResponse(data.data);
    }
  }, [data]);
  console.log('Profile response : ', response);
  return (
    <Box>{isSuccess && response && <UserProfile response={response} />}</Box>
  );
};

export default MyProfile;
