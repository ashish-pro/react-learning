import React, { Component } from 'react'
import Navbar from './Navbar'
import Product from './Product'

class Layout extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <Product/>
      </div>
    )
  }
}

export default Layout