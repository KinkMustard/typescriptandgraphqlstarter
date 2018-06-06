import * as React from "react";

export default function() {
  return (
    <React.Fragment>
      <div className="page-header">
        <h3>Profile Information</h3>
      </div>
      <form action="/account/profile" className="form-horizontal" method="POST">
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
              type="email"
            />
          </div>
        </div>
        <div className="form-group">
          <label className="col-sm-3 control-label" htmlFor="name">
            Name
          </label>
          <div className="col-sm-7">
            <input className="form-control" id="name" name="name" type="text" />
          </div>
        </div>
        <div className="form-group">
          <label className="col-sm-3 control-label">Gender</label>
          <div className="col-sm-6">
            <label className="radio col-sm-3">
              <input
                data-toggle="radio"
                name="gender"
                type="radio"
                value="male"
              />
              <span>Male</span>
            </label>
            <label className="radio col-sm-3">
              <input
                data-toggle="radio"
                name="gender"
                type="radio"
                value="female"
              />
              <span>Female</span>
            </label>
            <label className="radio col-sm-3">
              <input
                data-toggle="radio"
                name="gender"
                type="radio"
                value="other"
              />
              <span>Other</span>
            </label>
          </div>
        </div>
        <div className="form-group">
          <label className="col-sm-3 control-label" htmlFor="location">
            Location
          </label>
          <div className="col-sm-7">
            <input
              className="form-control"
              id="location"
              name="location"
              type="text"
            />
          </div>
        </div>
        <div className="form-group">
          <label className="col-sm-3 control-label" htmlFor="website">
            Website
          </label>
          <div className="col-sm-7">
            <input
              className="form-control"
              id="website"
              name="website"
              type="text"
            />
          </div>
        </div>
        <div className="form-group">
          <label className="col-sm-3 control-label">Gravatar</label>
          <div className="col-sm-4">
            <img className="profile" height="100" width="100" />
          </div>
        </div>
        <div className="form-group">
          <div className="col-sm-offset-3 col-sm-4">
            <button className="btn btn btn-primary" type="submit">
              <i className="fa fa-pencil" />
              Update Profile
            </button>
          </div>
        </div>
      </form>
      <div className="page-header">
        <h3>Change Password</h3>
      </div>
      <form
        action="/account/password"
        className="form-horizontal"
        method="POST"
      >
        <input name="_csrf" type="hidden" />
        <div className="form-group">
          <label className="col-sm-3 control-label" htmlFor="password">
            New Password
          </label>
          <div className="col-sm-7">
            <input
              className="form-control"
              id="password"
              name="password"
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
              type="password"
            />
          </div>
        </div>
        <div className="form-group">
          <div className="col-sm-offset-3 col-sm-4">
            <button className="btn btn-primary" type="submit">
              <i className="fa fa-lock" />
              Change Password
            </button>
          </div>
        </div>
      </form>
      <div className="page-header">
        <h3>Delete Account</h3>
      </div>
      <form action="/account/delete" className="form-horizontal" method="POST">
        <div className="form-group">
          <p className="col-sm-offset-3 col-sm-4">
            You can delete your account, but keep in mind this action is
            irreversible.
          </p>
          <input name="_csrf" type="hidden" />
          <div className="col-sm-offset-3 col-sm-4">
            <button className="btn btn-danger" type="submit">
              <i className="fa fa-trash" />
              Delete my account
            </button>
          </div>
        </div>
      </form>
      <div className="page-header">
        <h3>Linked Accounts</h3>
      </div>
      <div className="form-horizontal">
        <div className="form-group">
          <div className="col-sm-offset-3 col-sm-4" />
        </div>
      </div>
    </React.Fragment>
  );
}
