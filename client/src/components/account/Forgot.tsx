import * as React from "react";

export default function() {
  return (
    <div className="col-sm-8 col-sm-offset-2">
      <form method="POST">
        <legend>Forgot Password</legend>
        <input name="_csrf" type="hidden" />
        <div className="form-group">
          <p>
            Enter your email address below and we will send you password reset
            instructions.
          </p>
          <label className="control-label" htmlFor="email">
            Email
          </label>
          <input
            className="form-control"
            id="email"
            name="email"
            placeholder="Email"
            required={true}
            type="email"
          />
        </div>
        <div className="form-group">
          <button className="btn btn-primary" type="submit">
            <i className="fa fa-key" />
            Reset Password
          </button>
        </div>
      </form>
    </div>
  );
}
