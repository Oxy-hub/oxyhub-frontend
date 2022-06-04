import { FaHeart } from 'react-icons/fa';
import { FooterContainer, FooterWrapper, BuiltWithText } from './footer.styled';

const Footer = () => (
  <FooterContainer>
    <FooterWrapper>
      <BuiltWithText>
        Made with
        <span>
          <FaHeart />
        </span>
        and
        <span className="bold">React</span>
      </BuiltWithText>
    </FooterWrapper>
  </FooterContainer>
);

export default Footer;
