import React from 'react'
import ComponentA from './ComponentA';
import ComponentC from './ComponentC'

const ComponentB = () => {
    let name = "Swiggy"
  return (
    <div>
       <h2>Hello from componemtB</h2>
       <ComponentA name = {name} apptype = "mobile"/>
       <hr />
       <ComponentC studentName = {"Rahul"} rollno = {123}  />
    </div>
  )
}

export default ComponentB;

// Functional Component
