import React, { useState } from 'react'
import user from '../data/Userdata'

const Hero = () => {
  const userData = [...user];
  return (
    <div className='container d-flex justify-content-center mt-4'>
      <table class="table">
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
        return <tr>
        <th>{index}</th>
        <td>{udata.id}</td>
        <td></td>
        <td>@mdo</td>
      </tr>
      })
    }
  </tbody>
</table>
    </div>
  )
}

export default Hero;