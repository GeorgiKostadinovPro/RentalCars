import { dateFormatter } from "../../../utilities/dateFormatter"

export const UserRow = ({ 
    index, 
    user
}) => {
    return (
      <tr>
        <td>{index}</td>
        <td>{user.username}</td>
        <td>{user.email}</td>
        <td>{dateFormatter(user._createdOn)}</td>
        <td style={{ width: "125px" }}>
          No Actions
        </td>
      </tr>
    );
}