const Form = () => {
  return (
    <div className="d-flex justify-content-center align-items-center mt-5">
      <div className="card border-dark mb-3" style={{ maxWidth: "18rem" }}>
        <div className="card-header text-center bg-dark text-white">Login</div>
        <div className="card-body text-dark">
          <form>
            <div className="form-floating mb-3">
              <input
                type="email"
                className="form-control"
                id="floatingInput"
                placeholder="name@example.com"
              />
              <label htmlFor="floatingInput">Email address</label>
            </div>
            <div className="form-floating">
              <input
                type="password"
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
  );
};

export default Form;
