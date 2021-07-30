import {LayoutContainer} from './layout.styled';

const PrivateLayout = props => {
	return (
		<LayoutContainer>
			<nav>This is a private navbar</nav>
			{props.children}
			<footer>This is a private footer</footer>
		</LayoutContainer>
	);
};

export default PrivateLayout;
