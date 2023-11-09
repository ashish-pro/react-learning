import React, { Component } from 'react'

class Navbar extends Component {
  render() {
    return (
        <nav className="navbar navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">List Rendering</a>
        </div>
      </nav>
    )
  }
}

export default Navbar;