import React from "react";
import "./HService.css";
import ServicesList from "./ServicesList/ServicesList";

const HService = () => {
  return (
    <div className="HService">
      <div className="HServices-heading">
        <div className="HServices-title">Services</div>
        <div className="HServices-subtitle">
          {`No matter what IT services you need, Clever minds \n technologies will be there to support every step of the way.`}
        </div>
      </div>
      <div className="services-container">
        <ServicesList />
      </div>
    </div>
  );
};

export default HService;
