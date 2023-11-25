import React from "react";
import{Link} from 'react-router-dom'

const Header = () => {
  return (
    <nav className="navbar navbar-dark bg-dark navbar-expand-lg mb-5">
      <div className="container-fluid">
        <Link className="navbar-brand" to="">
          My App
        </Link>
      </div>
      <div className='ml-auto'>
        <ul className='navbar-nav'>
            <li><Link className='nav-link' to="">Home</Link></li>
            <li><Link  className='nav-link' to="/contact">Contact</Link></li>
            <li><Link className='nav-link' to="/user">Users</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
