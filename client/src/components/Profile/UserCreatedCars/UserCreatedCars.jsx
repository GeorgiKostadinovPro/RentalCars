import { useEffect } from 'react'
import { Link } from 'react-router-dom'

import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'

import { useAuthContext } from '../../../hooks/useAuthContext'
import { useCarsContext } from '../../../hooks/useCarsContext'

import { CreatedCarRow } from './CreatedCarRow'
import { Path } from '../../../utilities/Path'

export const UserCreatedCars = () => {
  const { 
    cars, 
    getUserCars,
    deleteCarSubmitHandler,
    carIdToDelete, 
    setCarIdToDeleteHandler } = useCarsContext();

  const { userId } = useAuthContext();

  useEffect(() => {
    getUserCars(userId);
  }, []);

  const handleClose = () => {
    setCarIdToDeleteHandler();
  };

  return (
    <>
      <div className="container-xl">
        <div className="table-responsive">
          <div className="table-wrapper">
            <div className="table-title">
              <div className="row">
                <div className="col-sm-6">
                  <h2>
                    Manage <b>My Cars</b>
                  </h2>
                </div>
                <div className="col-sm-6">
                  <Link to={Path.createCar} className="btn btn-success">
                    <i className="fa-solid fa-plus"></i>{" "}
                    <span>Add New Car</span>
                  </Link>
                </div>
              </div>
            </div>
            <table className="table table-striped table-hover">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Make</th>
                  <th>Model</th>
                  <th>Year</th>
                  <th>Created On</th>
                  <th>Actions</th>
                </tr>
              </thead>
              
              <tbody>
                {cars && cars.length > 0 ? (
                  cars.map((car, i) => (
                    <CreatedCarRow
                      key={car._id}
                      index={i + 1}
                      car={car}
                      setCarIdToDeleteHandler={setCarIdToDeleteHandler}
                    />
                  ))
                ) : (
                  <tr className="no-data-yet-p">
                    <td>No cars added yet.</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <Modal
        show={carIdToDelete}
        onHide={handleClose}
        style={{ marginTop: "100px" }}
      >
        <Modal.Header closeButton>
          <Modal.Title>Are you sure?</Modal.Title>
        </Modal.Header>
        <Modal.Body>This action cannot be undone.</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="danger" onClick={() => deleteCarSubmitHandler(carIdToDelete)}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}