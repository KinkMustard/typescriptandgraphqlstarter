import * as React from "react";

export default function() {
  return (
    <div className="col-sm-8 col-sm-offset-2">
      <form method="POST">
        <legend>Reset Password</legend>
        <input name="_csrf" type="hidden" />
        <div className="form-group">
          <label htmlFor="password">New Password</label>
          <input
            className="form-control"
            id="password"
            name="password"
            placeholder="New password"
            required={true}
            type="password"
          />
        </div>
        <div className="form-group">
          <label htmlFor="confirm">Confirm Password</label>
          <input
            className="form-control"
            id="confirm"
            name="confirm"
            placeholder="Confirm password"
            required={true}
            type="password"
          />
        </div>
        <div className="form-group">
          <button className="btn btn-primary btn-reset" type="submit">
            <i className="fa fa-keyboard-o" />
            Change Password
          </button>
        </div>
      </form>
    </div>
  );
}
