import Proptypes from 'prop-types';
import Input from './Input';

const FormControl = ({ control, ...rest }) => {
  switch (control) {
    // case 'input':
    //   return <Input {...rest} />;
    default:
      // eslint-disable-next-line
      return <Input {...rest} />;
  }
};

export default FormControl;

FormControl.propTypes = {
  control: Proptypes.string
};

FormControl.defaultProps = {
  control: null
};
