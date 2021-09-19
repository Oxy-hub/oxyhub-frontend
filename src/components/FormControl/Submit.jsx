import PropTypes from 'prop-types';
import Button from './submit.styled';

const Submit = ({
  children: text,
  disabled,
  isSuccess,
  isError,
  successMessage,
  errorMessage
}) => {
  const setMessage = () => {
    if (disabled) return 'Saving...';
    if (isSuccess) return successMessage || 'Successful!';
    if (isError) return errorMessage || 'Something Went Wrong.Try Again..';
    return text;
  };

  return (
    <Button type="submit" disabled={disabled}>
      {setMessage()}
    </Button>
  );
};

export default Submit;

Submit.propTypes = {
  children: PropTypes.node.isRequired,
  disabled: PropTypes.bool.isRequired,
  isSuccess: PropTypes.bool,
  isError: PropTypes.bool,
  successMessage: PropTypes.string,
  errorMessage: PropTypes.string
};

Submit.defaultProps = {
  isSuccess: false,
  isError: false,
  successMessage: null,
  errorMessage: null
};
