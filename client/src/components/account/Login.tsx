import * as React from "react";

export default function() {
  return (
    <React.Fragment>
      <div className="page-header">
        <h3>Sign in</h3>
      </div>
      <form className="form-horizontal" method="POST">
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
          <div className="col-sm-offset-3 col-sm-7">
            <button className="col-sm-3 btn btn-primary" type="submit">
              <i className="fa fa-user" />
              Login
            </button>
            <a className="btn btn-link" href="/forgot">
              Forgot your password?
            </a>
          </div>
        </div>
        <div className="form-group">
          <div className="col-sm-offset-3 col-sm-7">
            <hr />
          </div>
        </div>
        <div className="form-group">
          <div className="col-sm-offset-3 col-sm-7">
            <a
              className="btn btn-block btn-facebook btn-social"
              href="/auth/facebook"
            >
              <i className="fa fa-facebook" />
              Sign in with Facebook
            </a>
          </div>
        </div>
      </form>
    </React.Fragment>
  );
}
