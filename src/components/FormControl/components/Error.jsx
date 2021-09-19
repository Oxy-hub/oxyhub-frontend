import Proptypes from 'prop-types';
import { ErrorMessage } from './error.styled';

const Error = ({ children }) => <ErrorMessage>{children}</ErrorMessage>;

export default Error;

Error.propTypes = {
  children: Proptypes.node.isRequired
};
