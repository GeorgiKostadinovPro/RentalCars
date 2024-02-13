import { Link } from 'react-router-dom'

import { Path } from '../../../utilities/Path'
import { dateFormatter } from "../../../utilities/dateFormatter"

export const FavouriteCarRow = ({
    index, 
    id,
    car,
    setFavIdToDeleteHandler
}) => {
    return (
      <tr>
        <td>{index}</td>
        <td>{car.make}</td>
        <td>{car.model}</td>
        <td>{car.year}</td>
        <td>{dateFormatter(car._createdOn)}</td>
        <td style={{ width: '100px' }}>
          <Link to={Path.carDetails(car._id)} className="details">
            <i className="fa-solid fa-circle-info"></i>
          </Link>

          <a
            onClick={() => setFavIdToDeleteHandler(id)}
            type="submit"
            className="delete"
          >
            <i className="fa-solid fa-trash"></i>
          </a>
        </td>
      </tr>
    );
}