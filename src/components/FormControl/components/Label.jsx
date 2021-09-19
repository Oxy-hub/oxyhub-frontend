import Proptypes from 'prop-types';
import { FormLabel } from './label.styled';

const Label = ({ text, htmlFor, required }) => (
  <FormLabel htmlFor={htmlFor}>
    {text}
    {required && <span> *</span>}
  </FormLabel>
);

export default Label;

Label.propTypes = {
  text: Proptypes.string.isRequired,
  htmlFor: Proptypes.string.isRequired,
  required: Proptypes.bool
};

Label.defaultProps = {
  required: false
};
