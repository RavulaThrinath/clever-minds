import React from "react";
import { Link } from "react-router-dom";
import "./HAbout.css";

const HAbout = () => {
  return (
    <div className="HAbout">
      <div className="HAbout-container">
        <div className="HAbout-text">
          <h1>Who we are</h1>
          <p>
            {" "}
            At Clever minds technologies, we believe that technology should support and enhance
            your organization’s success, not constrain it. With our wide range
            of best-in-class services, we provide customized solutions that fit
            your unique IT needs. We’re committed to excelling at our job so you
            can focus on doing yours.
          </p>
          <Link className="btn-rm" to="./careers">
            <button className="jot">Join our team</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HAbout;
