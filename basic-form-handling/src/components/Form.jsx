import { useState } from "react";

const Form = () => {
  const [user, setUser] = useState({ email: "", password: "" });

  /**
   * The function `userHandler` is a JavaScript React function that updates the `user` object based on
   * the input values and logs the `user` object when the form is submitted.
   */
  let userHandler = (e) => {
    if (e.target.name === "email") setUser({ ...user, email: e.target.value });
    if (e.target.name === "password") setUser({ ...user, password: e.target.value });
    if (e.target.name === "formSubmit"){
      e.preventDefault();
      console.log(user);
    }
  };

  // let formSubmitHandler = (e) => {
  //   e.preventDefault();
  //   console.log(user);
  //   //send user object to back.
  //   //axios.post(url,user).then().catch()
  // };

  return (
    <>
      <pre>{JSON.stringify(user)}</pre>
      <div className="d-flex justify-content-center align-items-center mt-5">
        <div className="card border-dark mb-3" style={{ maxWidth: "18rem" }}>
          <div className="card-header text-center bg-dark text-white">
            Login
          </div>
          <div className="card-body text-dark">
            <form onSubmit={userHandler} name="formSubmit">
              <div className="form-floating mb-3">
                <input
                  onChange={userHandler}
                  type="email"
                  name="email"
                  className="form-control"
                  id="floatingInput"
                  placeholder="name@example.com"
                />
                <label htmlFor="floatingInput">Email Id</label>
              </div>
              <div className="form-floating">
                <input
                  type="password"
                  name="password"
                  onChange={userHandler}
                  className="form-control"
                  id="floatingPassword"
                  placeholder="Password"
                />
                <label htmlFor="floatingPassword">Password</label>
              </div>
              <div className="mt-3">
                <input
                  type="submit"
                  className="btn btn btn-danger"
                  value="Login"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Form;
