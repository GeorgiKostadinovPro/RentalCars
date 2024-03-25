import { useEffect, useState } from 'react'

import * as userService from '../../../services/userService'

import './UserInfo.css'

export const UserInfo = () => {
  const [user, setUser] = useState({});

  useEffect(() => {
    const getUser = async () => {
      try {
        const user = await userService.getUser();

        setUser(user);
      } catch (error) {
        console.log(error.message);
      }
    };

    getUser();
  }, [])

  return (
    <div className="user-info">
      <div className="user-info-wrapper">
        <img
          src={
            user?.profilePictureUrl
              ? user?.profilePictureUrl
              : "https://api-private.atlassian.com/users/804a32f69779303c8344ba035dd49356/avatar"
          }
          alt="User profile"
        />

        <div className="main-content">
          <h2>Personal Info</h2>
          <hr />
          <p>Username: {user.username}</p>
          <hr />
          <p>Email: {user.email}</p>
        </div>
      </div>
    </div>
  );
}