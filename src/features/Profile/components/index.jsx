import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Box } from '@chakra-ui/react';
import UserProfile from './UserProfile';
import useGetProfileDetails from '../api/getProfileDetails';

const MyProfile = () => {
  const [response, setResponse] = useState({});
  const tempToken = useSelector(state => state.auth.accessToken);
  const { data, isSuccess } = useGetProfileDetails(tempToken);
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
