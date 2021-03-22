import React, { Component } from "react";
import { Link } from "react-router-dom";

class Landing extends Component {
  render() {
    return (
      <div style={{ height: "45vh" }} className="col s12 center-align">
        <div className="row">
          <div className="col s12 center-align">
            <h4>
              Please Register or Log in to comment or create articles
            </h4>
            <br />
            <div className="col s6">
              <Link
                to="/register"
                style={{
                  width: "150px",
                  borderRadius: "2px",
                  letterSpacing: "1.5px"
                }}
                className="btn btn-large waves-effect waves-light hoverable blue accent-3 white-text"
              >
                Register
              </Link>
            </div>
            <div className="col s6">
              <Link
                to="/login"
                style={{
                  width: "150px",
                  borderRadius: "2px",
                  letterSpacing: "1.5px"
                }}
                className="btn btn-large waves-effect waves-light white blue-text"
              >
                Log In
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
