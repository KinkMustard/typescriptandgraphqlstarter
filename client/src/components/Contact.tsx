import * as React from "react";

export default function() {
  return (
    <React.Fragment>
      <div className="page-header">
        <h3>Contact Form</h3>
      </div>
      <form className="form-horizontal" method="POST">
        <input name="_csrf" type="hidden" />
        <div className="form-group">
          <label className="col-sm-2 control-label" htmlFor="name">
            Name
          </label>
          <div className="col-sm-8">
            <input className="form-control" id="name" name="name" type="text" />
          </div>
        </div>
        <div className="form-group">
          <label className="col-sm-2 control-label" htmlFor="email">
            Email
          </label>
          <div className="col-sm-8">
            <input
              className="form-control"
              id="email"
              name="email"
              type="text"
            />
          </div>
        </div>
        <div className="form-group">
          <label className="col-sm-2 control-label" htmlFor="message">
            Body
          </label>
          <div className="col-sm-8">
            <textarea className="form-control" id="message" name="message" />
          </div>
        </div>
        <div className="form-group">
          <div className="col-sm-offset-2 col-sm-8">
            <button className="btn btn-primary" type="submit">
              <i className="fa fa-envelope" />
              Send
            </button>
          </div>
        </div>
      </form>
    </React.Fragment>
  );
}
