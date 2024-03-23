import { useEffect } from 'react'

import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'

import { useCarsContext } from '../../../hooks/useCarsContext'

import { CarRow } from './CarRow'

export const ManageCars = () => {
  const {
    cars,
    getAllCars,
    deleteCarSubmitHandler,
    carIdToDelete,
    setCarIdToDeleteHandler } = useCarsContext();

  useEffect(() => {
    getAllCars();
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
                    Manage <b>All Cars</b>
                  </h2>
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
                    <CarRow
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
          <Button
            variant="danger"
            onClick={() => deleteCarSubmitHandler(carIdToDelete)}
          >
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}