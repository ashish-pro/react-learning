import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import UserList from './UserList'
import UserDetails from './UserDetails'

const User = () => {
  const [userData, setUserData] = useState({})
  const [selUser, setSelUser] = useState({});

  const getSelectedUser = (user) => {
    setSelUser(user);
  };

  useEffect(() => {
    Axios.get('https://dummyjson.com/users')
      .then((resp) => {
        setUserData(resp.data);
      })
      .catch((err) => {});
      
    return () => {
      console.log("Unmounting time");
    };
  }, []);
  return (
    <div>
      <h3>User Component</h3>
      {/* <pre>{JSON.stringify(userData)}</pre> */}
      <div className="container">
        <div className="row">
          <div className="col-8">
            {Object.keys(userData).length > 0 ? (
              <UserList getusers={getSelectedUser} users={userData.users} />
            ) : null}
          </div>
          <div className="col-4">
            {Object.keys(selUser).length > 0 ? (
              <UserDetails user={selUser} />
            ) : (
              null
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default User