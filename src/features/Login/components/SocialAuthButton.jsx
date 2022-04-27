import PropTypes from 'prop-types';
import { Button, IconContainer } from './socialauthbutton.styled';

const SocialAuthButton = ({
  text,
  icon,
  background,
  color,
  onClick,
  isLast
}) => {
  const handleButtonClick = () => {
    onClick();
  };

  return (
    <Button
      last={isLast}
      onClick={handleButtonClick}
      background={background}
      color={color}
    >
      <IconContainer>{icon}</IconContainer>
      {text}
    </Button>
  );
};

export default SocialAuthButton;

SocialAuthButton.propTypes = {
  text: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired,
  background: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  isLast: PropTypes.bool.isRequired
};
