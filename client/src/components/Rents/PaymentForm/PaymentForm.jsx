import { useState } from 'react'
import { useForm } from 'react-hook-form'

import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'

import * as rentService from '../../../services/rentService'
import { SuccessfulPayment } from './SuccessfulPayment'
import { Constants } from '../../../utilities/constants'

import './PaymentForm.css'

const defaultValues = {
    cardNumber: '',
    cardHolder: '',
    expires: '',
    CVC: ''
};

export const PaymentForm = ({ rentInfo }) => {
    const [rent, setRentInfo] = useState(rentInfo);
    const [show, setShow] = useState(rentInfo); 

    const {
        register,
        handleSubmit,
        reset,
        formState: {errors}
    } = useForm({ defaultValues, mode: 'onChange' });

    const paymentSubmitHandler = async () => {
        try {
            const result = await rentService.createRent(rent);

            setRentInfo(result);

            reset();

            setShow(null);
        } catch (error) {
            console.log(error.message);
        }
    };

    const handleClose = () => {
        setShow(null);
    };

    return (
      <>
        <Modal
          show={show}
          onHide={handleClose}
          className="payment-form-container"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Form onSubmit={handleSubmit(paymentSubmitHandler)}>
            <Modal.Header closeButton>
              <Modal.Title>Payment Summary</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className="payment-summary">
                <Form.Label>Total Price: ${rent?.totalPrice}</Form.Label>
                <hr />
              </div>

              <Form.Group className="mb-3" controlId="cardNumber">
                <Form.Label>Card Number</Form.Label>
                <Form.Control
                  {...register("cardNumber", Constants.payment.cardNumber)}
                  type="text"
                  placeholder="Enter card number"
                  autoFocus
                />
                <span
                  style={{
                    display: errors.cardNumber?.message ? "block" : "none",
                    color: "red",
                  }}
                >
                  {errors.cardNumber?.message}
                </span>
              </Form.Group>
              <div className="payment-expires-and-cvc">
                <Form.Group className="mb-3" controlId="cardExpires">
                  <Form.Label>Card Expires</Form.Label>
                  <Form.Control
                    {...register("expires", {
                      ...Constants.payment.expires,
                      validate: (expires) => {
                        const [month, year] = expires.split('/');

                        const expirationDate = new Date(`20${year}`, month - 1);
                        const currDate = new Date();

                        if (expirationDate <= currDate) {
                            return "The expiration date is invalid!";
                        }
                      }
                    })}
                    type="text"
                    placeholder="MM/YY"
                  />
                  <span
                    style={{
                      display: errors.expires?.message ? "block" : "none",
                      color: "red",
                    }}
                  >
                    {errors.expires?.message}
                  </span>
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="cardCVC"
                  style={{ marginLeft: "10px" }}
                >
                  <Form.Label>Card CVC</Form.Label>
                  <Form.Control
                    {...register("CVC", Constants.payment.CVC)}
                    type="text"
                    placeholder="Enter CVC"
                  />
                  <span
                    style={{
                      display: errors.CVC?.message ? "block" : "none",
                      color: "red",
                    }}
                  >
                    {errors.CVC?.message}
                  </span>
                </Form.Group>
              </div>
              <Form.Group className="mb-3" controlId="cardHolderName">
                <Form.Label>Cardholder Name</Form.Label>
                <Form.Control
                  {...register("cardHolder", Constants.fullName)}
                  type="text"
                  placeholder="Enter cardholder name"
                />
                <span
                  style={{
                    display: errors.cardHolder?.message ? "block" : "none",
                    color: "red",
                  }}
                >
                  {errors.cardHolder?.message}
                </span>
              </Form.Group>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Cancel
              </Button>
              <Button variant="success" type="submit">
                Pay
              </Button>
            </Modal.Footer>
          </Form>
        </Modal>

        {rent._id && <SuccessfulPayment rentId={rent._id} />}
      </>
    );
}