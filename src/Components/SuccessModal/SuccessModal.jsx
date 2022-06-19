import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import crownBroken from '../../assets/images/crown-broken.png';
import successTick from '../../assets/images/success.svg';

export const SuccessModal = ({emptyCart, ...props}) => (
  <Modal
    {...props}
    size="md"
    aria-labelledby="contained-modal-title-vcenter"
    centered
  >
    <Modal.Header closeButton>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Modal.Title id="contained-modal-title-vcenter">
          {emptyCart ? 'Whoops... Your cart is empty' : 'Successful payment'}
        </Modal.Title>
        <img style={{width: '60px', marginLeft: '20px'}} src={emptyCart ? crownBroken : successTick} alt="broken crown" />
      </div>
    </Modal.Header>
    <Modal.Body>
      {!emptyCart && <h4>Thank you for shopping with us</h4>}
      <p>
        Redirecting back to home page.
      </p>
    </Modal.Body>
    <Modal.Footer>
      <Button style={{ color: '#0d6efd' }} onClick={props.onHide}>Close</Button>
    </Modal.Footer>
  </Modal>
);