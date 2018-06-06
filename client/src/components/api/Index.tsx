import * as React from "react";

export default function() {
  return (
    <React.Fragment>
      <h2>API Examples</h2>
      <hr />
      <div className="row">
        <div className="col-sm-4">
          <a href="/api/facebook" style={{ color: "#fff" }}>
            <div
              className="panel panel-default"
              style={{ backgroundColor: "#3b5998" }}
            >
              <div className="panel-body">
                <img
                  alt="Facebook"
                  height="40"
                  src="http://i.imgur.com/jiztYCH.png"
                />
                Facebook
              </div>
            </div>
          </a>
        </div>
      </div>
    </React.Fragment>
  );
}
