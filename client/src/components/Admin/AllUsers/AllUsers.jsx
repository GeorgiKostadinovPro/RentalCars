import { useEffect, useState } from "react"

import * as userService from '../../../services/userService'
import { UserRow } from "./UserRow"

export const AllUsers = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const getAllUsers = async () => {
            try {
                const result = await userService.getAll();

                setUsers(result);
            } catch (error) {
                console.log(error.message);
            }
        };

        getAllUsers();
    }, []);

    return (
      <>
        <div className="container-xl">
          <div className="table-responsive">
            <div className="table-wrapper">
              <div className="table-title">
                <div className="row">
                  <div className="col-sm-6">
                    <h2>
                      Manage <b>All Users</b>
                    </h2>
                  </div>
                </div>
              </div>
              <table className="table table-striped table-hover">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Username</th>
                    <th>Email</th>
                    <th>Created On</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {users && users.length > 0 ? (
                    users.map((user, i) => (
                      <UserRow
                        key={user._id}
                        index={i + 1}
                        user={user}
                      />
                    ))
                  ) : (
                    <tr className="no-cars-yet-p">
                      <td>No users registered yet.</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </>
    );
}