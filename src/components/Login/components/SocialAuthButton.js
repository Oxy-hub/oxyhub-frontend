import {Button, IconContainer} from './socialauthbutton.styled';
const SocialAuthButton = ({children, last, helper, icon, ...props}) => {
	return (
		<Button last={last} onClick={helper} {...props}>
			<IconContainer>{icon}</IconContainer>
			{children}
		</Button>
	);
};

export default SocialAuthButton;
