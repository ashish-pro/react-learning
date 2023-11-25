import React from 'react'
const UserList = ({users, getusers}) => {
    const selectUser = (user) => {
        getusers(user);
      };
  return (
    <>
    {/* <pre>{JSON.stringify(users)}</pre> */}
    <table className='table'>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email </th>
            <th>Gender</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index} onMouseOver={() => selectUser(user)}>
              <td>{user.id}</td>
              <td>{user.firstName}</td>
              <td>{user.email}</td>
              <td>{user.gender}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>

  )
}

export default UserList