import Footer from './Footer';
import Navbar from './Navbar';
import {LayoutContainer} from './layout.styled';

const PrivateLayout = props => {
	return (
		<LayoutContainer>
			<Navbar>This is a private navbar</Navbar>
			{props.children}
			<Footer>This is a private footer</Footer>
		</LayoutContainer>
	);
};

export default PrivateLayout;
