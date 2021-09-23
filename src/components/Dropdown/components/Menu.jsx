import PropType from 'prop-types';
import { v4 as uuid } from 'uuid';
import { MenuItem, List } from './menu.styled';

const Menu = ({ options, isLoading, onClickCallback }) => (
  <List>
    {isLoading ? (
      <p>Loading</p>
    ) : (
      options.map(option => (
        <li key={uuid()}>
          <MenuItem
            type="button"
            onClick={() => {
              onClickCallback(option);
            }}
          >
            {option.name}
          </MenuItem>
        </li>
      ))
    )}
  </List>
);

export default Menu;

Menu.propTypes = {
  options: PropType.arrayOf(
    PropType.shape({
      name: PropType.string.isRequired
    })
  ).isRequired,
  onClickCallback: PropType.func.isRequired,
  isLoading: PropType.bool
};

Menu.defaultProps = {
  isLoading: false
};
