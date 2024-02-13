import { useEffect, useState } from 'react'

import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'

import * as favouriteService from '../../../services/favouriteService'
import { useAuthContext } from '../../../hooks/useAuthContext'
import { FavouriteCarRow } from './FavouriteCarRow'

export const FavouriteCars = () => {
  const [favouriteCars, setFavouriteCars] = useState([]);
  const [favIdToDelete, setFavIdToDelete] = useState(null);

  const { userId } = useAuthContext();

  useEffect(() => {
    const getUserCars = async () => {
      try {
        const result = await favouriteService.getAllByUserId(userId);

        setFavouriteCars(result);
      } catch (error) {
        console.log(error.message);
      }
    };

    getUserCars();
  }, []);
  
  const setFavIdToDeleteHandler = (id) => {
    if (id) {
      setFavIdToDelete(id);
    }
  };

  const handleClose = () => {
    setFavIdToDelete(null);
  };

  const deleteFavouriteHandler = async () => {
    try {
      await favouriteService.deleteFavourite(favIdToDelete);

      setFavouriteCars(favourites => favourites.filter(f => f._id !== favIdToDelete));

      setFavIdToDelete(null);
    } catch (error) {
      console.log(error);
    }
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
                  <th style={{ textAlign: 'left' }}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {favouriteCars && favouriteCars.length > 0 ? (
                  favouriteCars.map((favourite, i) => (
                    <FavouriteCarRow
                      key={favourite._id}
                      index={i + 1}
                      id={favourite._id}
                      car={favourite.car}
                      setFavIdToDeleteHandler={setFavIdToDeleteHandler}
                    />
                  ))
                ) : (
                  <tr className="no-cars-yet-p">
                    <td>No cars added yet.</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <Modal show={favIdToDelete} onHide={handleClose} style={{ marginTop: '100px' }}>
        <Modal.Header closeButton>
          <Modal.Title>Are you sure?</Modal.Title>
        </Modal.Header>
        <Modal.Body>This action cannot be undone.</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="danger" onClick={deleteFavouriteHandler}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}