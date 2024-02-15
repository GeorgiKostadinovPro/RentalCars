import { Link } from 'react-router-dom'

import { Path } from '../../../utilities/Path'
import { dateFormatter } from "../../../utilities/dateFormatter"

export const PostRow = ({
    index,
    post
}) => {
    return (
        <tr>
          <td>{index}</td>
          <td>{post.title.slice(0, 20)}</td>
          <td>{dateFormatter(post._createdOn)}</td>
          <td style={{ width: '125px' }}>
            <Link to={Path.carDetails(post._id)} className="details">
              <i className="fa-solid fa-circle-info"></i>
            </Link>
  
            
            <Link className="edit">
              <i className="fa-solid fa-pen"></i>
            </Link>
  
            <a
              type="submit"
              className="delete"
            >
              <i className="fa-solid fa-trash"></i>
            </a>
          </td>
        </tr>
      );
}