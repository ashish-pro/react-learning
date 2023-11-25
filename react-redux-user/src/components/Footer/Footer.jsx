import React from 'react'
import {Link} from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="navbar navbar-dark bg-dark ">
      <div className="container-fluid">
        <Link className="navbar-brand" to="">
          Footer
        </Link>
      </div>
      <div className='mx-5'>
        <ul className='navbar-nav navbar-expand-nlg'>
            <li><Link className='nav-link' to="">Home</Link></li>
            <li><Link  className='nav-link' to="/contact">Contact</Link></li>
            <li><Link className='nav-link' to="/user">Users</Link></li>
        </ul>
      </div>

    </footer>
  )
}

export default Footer