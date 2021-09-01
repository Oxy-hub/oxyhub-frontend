import PropTypes from 'prop-types';
import { Button, IconContainer } from './socialauthbutton.styled';

const SocialAuthButton = ({ children, last, helper, icon, ...props }) => (
  <Button last={last} onClick={helper} {...props}>
    <IconContainer>{icon}</IconContainer>
    {children}
  </Button>
);

export default SocialAuthButton;

SocialAuthButton.propTypes = {
  children: PropTypes.node.isRequired,
  last: PropTypes.bool.isRequired,
  helper: PropTypes.func.isRequired,
  icon: PropTypes.element.isRequired
};
