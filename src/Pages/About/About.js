import React from "react";
import "./About.css";
import AboutCover from "../../Assets/Our Story.png";
// import { Helmet, HelmetProvider } from "react-helmet-async";
import "../../App.css";
import AboutText from "./AboutText/AboutText";
import { Helmet } from "react-helmet";

const About = (props) => {
  return (
    <div>
      <Helmet>
        <title>About | Clever minds technologies</title>
        <meta
          name="description"
          content="At Clever minds technologies, we believe that technology should support and enhance your organization’s success, not constrain it. "
        />
        <meta
          name="keywords"
          content="Software, IT, Consultancy, Cloud, Development, Cyber Security"
        />
      </Helmet>
      <div className="header" style={{ background: "#c5dbf2" }}>
        <div className="header-content">
          <div className="header-title">{props.title}</div>
          <div className="header-image">
            <img src={AboutCover} alt="" />
          </div>
        </div>
      </div>
      <div className="about-content">
        <AboutText />
      </div>
    </div>
  );
};

export default About;
