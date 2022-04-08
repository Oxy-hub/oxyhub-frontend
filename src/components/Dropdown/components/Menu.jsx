import PropType from 'prop-types';
import Skeleton from 'react-loading-skeleton';
import { v4 as uuid } from 'uuid';
import { MenuItem, List } from './menu.styled';

const Menu = ({ options = Array(5).fill(5), isLoading, onClickCallback }) => (
  <List>
    {options.map(option => (
      <li key={uuid()}>
        {isLoading ? (
          <Skeleton
            height={23}
            width={`${Math.random() * (100 - 50) + 50}%`}
            style={{ marginBottom: '10px' }}
          />
        ) : (
          <MenuItem
            type="button"
            onClick={() => {
              onClickCallback(option);
            }}
          >
            {option.name}
          </MenuItem>
        )}
      </li>
    ))}
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
