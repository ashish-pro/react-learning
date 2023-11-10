import React from 'react'
import user from '../data/USER_DATA.json'

const Hero = () => {
  const userData = [...user];
  return (
    <div className='container d-flex justify-content-center mt-4'>
      <table className="table">
  <thead>
    <tr>
      <th scope="col">SN</th>
      <th scope="col">Id</th>
      <th scope="col">FirstName</th>
      <th scope="col">LastName</th>
      <th scope="col">Email</th>
      <th scope="col">Gender</th>
      <th scope="col">Location</th>
    </tr>
  </thead>
  <tbody>
    {
      userData.map((udata,index)=>{
        return <tr key={udata.id}>
        <th>{index}</th>
        <td>{udata.id}</td>
        <td>{udata.first_name}</td>
        <td>{udata.last_name}</td>
        <td>{udata.email}</td>
        <td>{udata.gender}</td>
        <td>{udata.location}</td>
      </tr>
      })
    }
  </tbody>
</table>
    </div>
  )
}

export default Hero;