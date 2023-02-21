import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import crown from '../../assets/images/crown.svg';
import styles from './Headers.module.css';

function Headers() {
  return (
    <Navbar>
      <Container>
        <div>
          <Navbar.Brand href="/" style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-end'}}>
            <img className={styles.brand_logo_styles} src={crown} alt="" />
          </Navbar.Brand>
        </div>
        <div>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/shop">Shop</Nav.Link>
            <Nav.Link href="/cart">Cart</Nav.Link>
          </Nav>
        </div>
      </Container>
    </Navbar>
  );
}

export default Headers;