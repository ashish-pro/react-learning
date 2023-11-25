import React from 'react'
import Home_Img from '../../assets/home.png'

const Home = () => {
  return (
    <div>
      <div className='container mb-5'>
      <img src={Home_Img} className="img-fluid" alt='img'/>
      </div>
    </div>
  )
}

export default Home