import * as React from "react";

export default function() {
  return (
    <React.Fragment>
      <div className="page-header">
        <h2>
          <i className="fa fa-facebook-square" style={{ color: "#335397" }} />
          Facebook API
        </h2>
      </div>
      <div className="btn-group btn-group-justified">
        <a
          className="btn btn-primary"
          href="https://developers.facebook.com/docs/graph-api/quickstart/"
          target="_blank"
        >
          <i className="fa fa-check-square-o" />
          Quickstart
        </a>
        <a
          className="btn btn-primary"
          href="https://developers.facebook.com/tools/explorer"
          target="_blank"
        >
          <i className="fa fa-facebook" />
          Graph API Explorer
        </a>
        <a
          className="btn btn-primary"
          href="https://developers.facebook.com/docs/graph-api/reference/"
          target="_blank"
        >
          <i className="fa fa-code-fork" />
          API Reference
        </a>
      </div>
      <h3>
        <i className="fa fa-user" />
        My Profile
      </h3>
    </React.Fragment>
  );
}
