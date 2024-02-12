import { dateFormatter } from "../../../utilities/dateFormatter"

export const SingleCar = ({
    index, 
    car
}) => {
    return (
      <tr>
        <td>{index}</td>
        <td>{car.make}</td>
        <td>{car.model}</td>
        <td>{car.year}</td>
        <td>{dateFormatter(car._createdOn)}</td>
        <td>
          <a href="#editEmployeeModal" className="edit" data-toggle="modal">
            <i className="material-icons" data-toggle="tooltip" title="Edit">
              
            </i>
          </a>
          <a href="#deleteEmployeeModal" className="delete" data-toggle="modal">
            <i className="material-icons" data-toggle="tooltip" title="Delete">
              
            </i>
          </a>
        </td>
      </tr>
    );
}