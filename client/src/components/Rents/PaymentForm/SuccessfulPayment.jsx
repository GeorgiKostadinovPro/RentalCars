import { useState } from "react"
import { Link } from 'react-router-dom'

import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'

import { Path } from '../../../utilities/Path'

export const SuccessfulPayment = ({ rentId }) => {
    const [showSuccess, setShowSuccess] = useState(rentId);

    const handleClose = () => {
        setShowSuccess(null);
    };

    return (
      <Modal
        show={showSuccess}
        onHide={handleClose}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>You successfully rented this vehicle.</Modal.Title>
        </Modal.Header>
        <Modal.Body>Check your email for more information.</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="success" as={Link} to={Path.rentDetails(rentId)}>
            See Details
          </Button>
        </Modal.Footer>
      </Modal>
    );
}