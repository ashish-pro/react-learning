import React, { Component } from 'react'
import userdata from '../data/USER_DATA.json'

export class Main extends Component {
    constructor(props){
        super(props);
        this.state = userdata;
    }
  render() {
    return (
      <div>
        <pre>{JSON.stringify(this.state.userdata)}</pre>
      </div>
    )
  }
}

export default Main;