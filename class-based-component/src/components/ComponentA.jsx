import React from "react";
import ComponentC from "./ComponentC";
class ComponentA extends React.Component{
   location = "Delhi"
   render(){
    return <>
     <h3>Hello from componentA</h3>
     <hr />
     <h4>Food Dlivery app name {this.props.name} </h4>
     <h4>Order through {this.props.apptype}</h4>
     <hr />
     <ComponentC location = {this.location} hobby = {"Playing video games"}/>
    </>
   }
}

export default ComponentA;

// This is a class based component