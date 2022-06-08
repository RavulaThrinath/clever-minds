import React from "react";
import { AboutList } from "../../../Data";
import "./AboutText.css";

const AboutText = () => {
  return (
    <div className="about-list">
      {AboutList.map((aboutcontent) => (
        <div key={aboutcontent.id} className="about-container">
          <h1 className="about-subtitle">{aboutcontent.title}</h1>
          <p className="about-text">{aboutcontent.text}</p>
        </div>
      ))}
    </div>
  );
};

export default AboutText;
