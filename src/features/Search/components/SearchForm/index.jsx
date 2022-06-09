// import { useState } from 'react';
import { Box, Button, HStack } from '@chakra-ui/react';
import { useSelector, useDispatch } from 'react-redux';

import Select from './Select';
import { useGetStates } from '../../api/getStates';
import { useGetParlours } from '../../api/getParlours';
import { useGetDistricts } from '../../api/getDistricts';
import {
  setStatePreference,
  setDistrictPreference,
  resetDistrictPreference
} from '../../../../store/actions/user';

const SearchForm = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user);

  const {
    data: statesData,
    isSuccess: isStatesSuccess,
    isLoading: isStatesLoading
  } = useGetStates();

  const {
    data: districtsData,
    isError: isDistrictsError,
    isSuccess: isDistrictsSucess,
    isLoading: isDistrictsLoading
  } = useGetDistricts(user.statePreference ? user.statePreference.code : null);

  const { refetch: refetchParlours } = useGetParlours(
    user.statePreference ? user.statePreference.code : null,
    user.districtPreference ? user.districtPreference.name : null
  );

  const onStateChange = state => {
    dispatch(setStatePreference(state));
    dispatch(resetDistrictPreference());
  };

  const onDistrictChange = district => {
    dispatch(setDistrictPreference(district));
  };

  return (
    <Box maxWidth="75%" m="0 auto" sx={{ transform: 'translateY(-50%)' }}>
      <HStack
        spacing={0}
        boxShadow="2xl"
        align="stretch"
        overflow="hidden"
        borderRadius="2xl"
        bgColor="neutral.0"
        justify="space-between"
      >
        <Box width="100%">
          <Select
            onChange={onStateChange}
            isLoading={isStatesLoading}
            value={user.statePreference}
            placeholder="Select a state . . ."
            getOptionLabel={option => option.name}
            getOptionValue={option => option.code}
            loadingMessage={() => 'Loading states...'}
            noOptionsMessage={() => 'No states found.'}
            options={isStatesSuccess ? statesData.data.states : []}
          />
        </Box>

        <Box width="100%">
          <Select
            onChange={onDistrictChange}
            isLoading={isDistrictsLoading}
            value={user.districtPreference}
            placeholder="Select a district . . ."
            getOptionLabel={option => option.name}
            getOptionValue={option => option.name}
            loadingMessage={() => 'Loading dsitricts...'}
            noOptionsMessage={() =>
              isDistrictsError ? 'No districts Found.' : 'Select a state!'
            }
            options={isDistrictsSucess ? districtsData.data.districts : []}
          />
        </Box>

        <Box>
          <Button
            height="100%"
            px={10}
            onClick={() => {
              refetchParlours();
            }}
          >
            Search
          </Button>
        </Box>
      </HStack>
    </Box>
  );
};

export default SearchForm;
