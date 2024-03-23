import { Link } from 'react-router-dom'

import { Path } from '../../../utilities/Path'
import { dateFormatter } from "../../../utilities/dateFormatter"

export const CarRow = ({
  index, 
  car,
  setCarIdToDeleteHandler
}) => {
    return (
      <tr>
        <td>{index}</td>
        <td>{car.make}</td>
        <td>{car.model}</td>
        <td>{car.year}</td>
        <td>{dateFormatter(car._createdOn)}</td>
        <td style={{ width: '125px' }}>
          <Link to={Path.carDetails(car._id)} className="details">
            <i className="fa-solid fa-circle-info"></i>
          </Link>

          
          <Link to={Path.editCar(car._id)} className="edit">
            <i className="fa-solid fa-pen"></i>
          </Link>

          <a
            onClick={() => setCarIdToDeleteHandler(car._id)}
            type="submit"
            className="delete"
          >
            <i className="fa-solid fa-trash"></i>
          </a>
        </td>
      </tr>
    );
}