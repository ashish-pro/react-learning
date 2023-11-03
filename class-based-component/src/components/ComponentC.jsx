import React from 'react'

const ComponentC = (props) => {
  return (
    <div>
        <hr />
        <h1>Hello from ComponentC</h1>
        <pre>{JSON.stringify(props)}</pre>
        <p>My name is {props.studentName} and my roll number is {props.rollno}. I belongs to {props.location} and my 
        hobby is {props.hobby}.
        </p>
        
    </div>
  )
}

export default ComponentC