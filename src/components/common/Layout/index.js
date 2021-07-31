import Footer from './Footer';
import {LayoutContainer} from './layout.styled';

const PrivateLayout = props => {
	return (
		<LayoutContainer>
			<nav>This is a private navbar</nav>
			{props.children}
			<Footer>This is a private footer</Footer>
		</LayoutContainer>
	);
};

export default PrivateLayout;
