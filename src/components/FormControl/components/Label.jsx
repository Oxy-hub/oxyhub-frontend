import Proptypes from 'prop-types';
import { FormLabel } from './label.styled';

const Label = ({ text, htmlFor }) => (
  <FormLabel htmlFor={htmlFor}>{text}</FormLabel>
);

export default Label;

Label.propTypes = {
  text: Proptypes.string.isRequired,
  htmlFor: Proptypes.string.isRequired
};
