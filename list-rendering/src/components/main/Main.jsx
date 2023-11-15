import React, { Component } from "react";
import userdata from "../data/USER_DATA.json";

export class Main extends Component {
  state;
  constructor(props) {
    super(props);
    this.state = {
      user: userdata,
    };
  }
  render() {
    
    return (
      <>
        {/* <pre>{JSON.stringify(this.state.user)}</pre> */}
        {this.state.user.length > 0 ? (
          <div className="container d-flex justify-content-center mt-4">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">SN</th>
                  <th scope="col">Id</th>
                  <th scope="col">FirstName</th>
                  <th scope="col">LastName</th>
                  <th scope="col">Email</th>
                  <th scope="col">Gender</th>
                  <th scope="col">Location</th>
                </tr>
              </thead>
              <tbody>
                {this.state.user.map((udata, index) => {
                  return (
                    <tr key={udata.id}>
                      <th>{index}</th>
                      <td>{udata.id}</td>
                      <td>{udata.first_name}</td>
                      <td>{udata.last_name}</td>
                      <td>{udata.email}</td>
                      <td>{udata.gender}</td>
                      <td>{udata.location}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="d-flex justify-content-center mt-5 ">
            <div className="card" style={{width:"18rem",}}>
            <img
              src="https://img.freepik.com/free-vector/no-data-concept-illustration_114360-626.jpg?size=626&ext=jpg&ga=GA1.1.1826414947.1699920000&semt=ais"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">No Data Found</h5>
            </div>
          </div>
            </div>
        )}
      </>
    );
  }
}

export default Main;
