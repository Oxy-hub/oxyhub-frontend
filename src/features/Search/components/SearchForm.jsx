import { useState, useEffect } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Form, SearchButton } from './searchform.styled';
import bookingOptions from '../utils/bookingOptions';
import useGetStates from '../api/getStates';
import useGetDistricts from '../api/getDistricts';
import Dropdown from '../../../components/Dropdown';

const SearchForm = () => {
  const [disableClickBooking, setDisableClickBooking] = useState(true);
  const [stateId, setStateId] = useState(null);
  const stateQuery = useGetStates();
  const districtQuery = useGetDistricts(stateId);

  useEffect(() => {
    if (stateId) {
      districtQuery.refetch();
    }
  }, [stateId]);

  const initialValues = {
    state: null,
    district: null,
    type: null
  };

  const validationSchema = Yup.object({
    state: Yup.string().required('Select state!'),
    district: Yup.string().required('Select district!'),
    type: Yup.string().required('Select type of booking!')
  });

  const dropdownStyles = {
    width: '28.33%'
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={values => {
        // eslint-disable-next-line
        console.log(values);
      }}
    >
      {({ handleSubmit, setFieldValue, isValid, dirty }) => (
        <Form onSubmit={handleSubmit}>
          <Dropdown
            placeholder="Select your state ..."
            onValueSelectCallback={option => {
              setFieldValue('state', option.id);
              setStateId(option.id);
            }}
            style={dropdownStyles}
            options={stateQuery.data}
            isLoading={stateQuery.isLoading}
          />

          <Dropdown
            placeholder="Select your district ..."
            onValueSelectCallback={option => {
              setFieldValue('district', option.id);
              setDisableClickBooking(false);
            }}
            style={dropdownStyles}
            options={districtQuery.data}
            disableClick={!districtQuery.isSuccess}
            isLoading={districtQuery.isLoading}
          />

          <Dropdown
            placeholder="Booking type ..."
            onValueSelectCallback={option => setFieldValue('type', option.id)}
            style={dropdownStyles}
            options={bookingOptions}
            disableClick={disableClickBooking}
          />

          <SearchButton disabled={!(isValid && dirty)}>Search</SearchButton>
        </Form>
      )}
    </Formik>
  );
};

export default SearchForm;
