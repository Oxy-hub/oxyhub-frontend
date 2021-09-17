import PropTypes from 'prop-types';
import Footer from './Footer';
import Navbar from './Navbar';
import LayoutContainer from './layout.styled';

const PrivateLayout = ({ children }) => (
  <LayoutContainer>
    <Navbar>This is a private navbar</Navbar>
    {children}
    <Footer>This is a private footer</Footer>
  </LayoutContainer>
);

export default PrivateLayout;

PrivateLayout.propTypes = {
  children: PropTypes.node.isRequired
};
