import PropTypes from 'prop-types';
import Button from './formbutton.styled';

const FormButton = ({ children: text, submitting }) => (
  <>
    <Button type="submit" submitting={submitting}>
      {!submitting ? text : 'Saving...'}
    </Button>
  </>
);

export default FormButton;

FormButton.propTypes = {
  children: PropTypes.node.isRequired,
  submitting: PropTypes.bool.isRequired
};
