import { RiArrowDropDownLine } from 'react-icons/ri';

import { Button } from './dropdownbutton.styled';

const DropdownButton = () => (
  <Button type="button">
    <RiArrowDropDownLine size="2.5em" style={{ verticalAlign: 'middle' }} />
  </Button>
);

export default DropdownButton;
