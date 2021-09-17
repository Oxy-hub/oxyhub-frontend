import PropTypes from 'prop-types';
import { Button, IconContainer } from './socialauthbutton.styled';

const SocialAuthButton = ({
  text,
  icon,
  background,
  color,
  helper,
  isLast
}) => (
  <Button last={isLast} onClick={helper} background={background} color={color}>
    <IconContainer>{icon}</IconContainer>
    {text}
  </Button>
);

export default SocialAuthButton;

SocialAuthButton.propTypes = {
  text: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired,
  background: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  helper: PropTypes.func.isRequired,
  isLast: PropTypes.bool.isRequired
};
