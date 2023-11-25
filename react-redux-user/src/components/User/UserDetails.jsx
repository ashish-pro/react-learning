import React from 'react'

const UserDetails = ({user}) => {
  return (
    <>
      {/* <h1>UserDetails</h1> */}
      {/* <pre>{JSON.stringify(user)}</pre> */}
      <div className="card mb-3" style={{maxWidth: "540px"}}>
  <div className="row g-0">
    <div className="col-md-4">
      <img src={user.image} className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">{user.firstName + " " + user.lastName}</h5>
        <p className="card-text">Address: {user.address.address}</p>
        <p className="card-text">City: {user.address.city}</p>
        <p className="card-text">State: {user.address.state} <span className='fw-bolder'>Postal Code:</span>{user.address.postalCode}</p>
        <p className="card-text"><small class="text-muted">{user.gender}</small></p>
      </div>
    </div>
  </div>
</div>
    </>
  )
}

export default UserDetails