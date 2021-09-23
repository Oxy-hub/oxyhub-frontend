import { useState, useRef } from 'react';

import PropType from 'prop-types';
import useOutsideClick from '../../../hooks/useOutsideClick';
import Menu from './Menu';
import DropdownButton from './DropdownButton';
import { DropdownInput, DropdownWrapper, DisplayName } from './dropdown.styled';

const Dropdown = ({
  options,
  isLoading,
  placeholder,
  disableClick,
  onValueSelectCallback,
  style
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const ref = useRef();

  useOutsideClick(ref, () => {
    setIsOpen(false);
  });

  const onClickCallback = option => {
    setIsOpen(!isOpen);
    setSelectedItem(option.name);
    onValueSelectCallback(option);
  };

  return (
    <DropdownWrapper ref={ref} style={style}>
      <DropdownInput
        onClick={() => {
          if (!disableClick) {
            setIsOpen(!isOpen);
          }
        }}
      >
        <DisplayName selectedItem={selectedItem}>
          {selectedItem || placeholder}
        </DisplayName>
        <DropdownButton />
      </DropdownInput>
      {isOpen && (
        <Menu
          options={options}
          isLoading={isLoading}
          onClickCallback={onClickCallback}
        />
      )}
    </DropdownWrapper>
  );
};

export default Dropdown;
Dropdown.propTypes = {
  // eslint-disable-next-line
  options: PropType.array.isRequired,
  isLoading: PropType.bool,
  placeholder: PropType.string.isRequired,
  disableClick: PropType.bool,
  onValueSelectCallback: PropType.func.isRequired,
  // eslint-disable-next-line
  style: PropType.object.isRequired
};

Dropdown.defaultProps = {
  isLoading: false,
  disableClick: false
};
