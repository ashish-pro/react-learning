import React, { Component } from 'react'
import user from '../data/Userdata'

export class Main extends Component {
    constructor(props){
        super(props);
        this.state = user;
    }
  render() {
    return (
      <div>
        <pre>{JSON.stringify(this.state.user)}</pre>
      </div>
    )
  }
}

export default Main;