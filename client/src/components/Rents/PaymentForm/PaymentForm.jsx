import { useState } from 'react'

import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'

import './PaymentForm.css'

export const PaymentForm = ({ rentInfo }) => {
    const [rent, setRentInfo] = useState(rentInfo);

    const paymentSubmitHandler = async () => {
        try {
            
        } catch (error) {
            
        }
    };

    const handleClose = () => {
        setRentInfo(null);
    };

    return (
      <Modal
        show={rent}
        onHide={handleClose}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Payment Summary</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="payment-summary">
            <Form.Label>Total Price: ${rent?.totalPrice}</Form.Label>
            <hr />
          </div>
          <Form>
            <Form.Group className="mb-3" controlId="cardNumber">
              <Form.Label>Card Number</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter card number"
                autoFocus
              />
            </Form.Group>
            <div className="payment-expires-and-cvc">
              <Form.Group className="mb-3" controlId="cardExpires">
                <Form.Label>Card Expires</Form.Label>
                <Form.Control type="text" placeholder="MM/YY" />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="cardCVC"
                style={{ marginLeft: "10px" }}
              >
                <Form.Label>Card CVC</Form.Label>
                <Form.Control type="text" placeholder="Enter CVC" />
              </Form.Group>
            </div>
            <Form.Group className="mb-3" controlId="cardHolderName">
              <Form.Label>Cardholder Name</Form.Label>
              <Form.Control type="text" placeholder="Enter cardholder name" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="success" onClick={handleClose}>
            Pay
          </Button>
        </Modal.Footer>
      </Modal>
    );
}