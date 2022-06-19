import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import crown from '../../assets/images/crown.svg';
import { FooterContainer } from './Footer.styles';

function Footer() {
  return (
    <div style={{ display: 'flex', justifyContent: 'flex-start', marginTop: '20px' }}>
      <FooterContainer>
          <h3>H</h3>
          <img className="logo-img" src={crown} alt="" />
          <h3>SH CLOTHING</h3>
      </FooterContainer>
    </div>
  );
}

export default Footer;