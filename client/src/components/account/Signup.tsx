import * as React from "react";

export default function() {
  return (
    <React.Fragment>
      <div className="page-header">
        <h3>Sign up</h3>
      </div>
      <form className="form-horizontal" id="signup-form" method="POST">
        <input name="_csrf" type="hidden" />
        <div className="form-group">
          <label className="col-sm-3 control-label" htmlFor="email">
            Email
          </label>
          <div className="col-sm-7">
            <input
              className="form-control"
              id="email"
              name="email"
              placeholder="Email"
              required={true}
              type="email"
            />
          </div>
        </div>
        <div className="form-group">
          <label className="col-sm-3 control-label" htmlFor="password">
            Password
          </label>
          <div className="col-sm-7">
            <input
              className="form-control"
              id="password"
              name="password"
              placeholder="Password"
              required={true}
              type="password"
            />
          </div>
        </div>
        <div className="form-group">
          <label className="col-sm-3 control-label" htmlFor="confirmPassword">
            Confirm Password
          </label>
          <div className="col-sm-7">
            <input
              className="form-control"
              id="confirmPassword"
              name="confirmPassword"
              placeholder="Confirm Password"
              required={true}
              type="password"
            />
          </div>
        </div>
        <div className="form-group">
          <div className="col-sm-offset-3 col-sm-7">
            <button className="btn btn-success" type="submit">
              <i className="fa fa-user-plus" />
              Signup
            </button>
          </div>
        </div>
      </form>
    </React.Fragment>
  );
}
