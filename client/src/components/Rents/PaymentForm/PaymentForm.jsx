import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'

import './PaymentForm.css'
import { useState } from 'react'

export const PaymentForm = ({ payment }) => {
    const [paymentInfo, setPaymentInfo] = useState(payment);

    const handleClose = () => {
        setPaymentInfo(null);
    };

    return (
      <Modal
        show={paymentInfo}
        onHide={handleClose}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Payment Summary</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="payment-summary">
            <Form.Label>Total Price: ${payment.totalPrice}</Form.Label>
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