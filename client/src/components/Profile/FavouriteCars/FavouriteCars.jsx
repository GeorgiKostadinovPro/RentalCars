import { useEffect } from 'react'

import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'

import { useAuthContext } from '../../../hooks/useAuthContext'
import { useCarsContext } from '../../../hooks/useCarsContext'

import { FavouriteCarRow } from './FavouriteCarRow'

export const FavouriteCars = () => {
  const { 
    cars, 
    getFavouriteCars,
    deleteFavouriteSubmitHandler,
    carIdToDelete, 
    setCarIdToDeleteHandler } = useCarsContext();

  const { userId } = useAuthContext();

  useEffect(() => {
    getFavouriteCars(userId);
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
                    Manage <b>Favourite Cars</b>
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
                  <th style={{ textAlign: "left" }}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {cars && cars.length > 0 ? (
                  cars.map((favourite, i) => (
                    <FavouriteCarRow
                      key={favourite._id}
                      index={i + 1}
                      id={favourite._id}
                      car={favourite.car}
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
          <Button variant="danger" onClick={() => deleteFavouriteSubmitHandler(carIdToDelete)}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}