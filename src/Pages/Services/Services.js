import React from "react";
import "./Services.css";
import CareerCover from "../../Assets/Services Header Pic.png";
import { ServicesList } from "../../Data";
import "../../App.css";
import { Helmet } from "react-helmet";

const Services = (props) => {
  return (
    <div className="Services">
      <div className="header" style={{ background: "#f9e0fa" }}>
        <div className="header-content">
          <div className="header-title">{props.title}</div>
          <div className="header-image">
            <img src={CareerCover} alt="" />
          </div>
        </div>
      </div>
      <div className="services-content">
        <ServicesContainer />
      </div>
    </div>
  );
};

export default Services;

export const ServicesContainer = () => {
  const ServiceItems = ServicesList.map((items) => (
    <div key={items.id} className="services-items">
      <img
        className="services-img"
        src={require(`../../Assets/${items.Imageid}.svg`)}
        alt=""
      />
      <div className="services-right">
        <h1 className="services-title">{items.ServiceTitle}</h1>
        <div className="services-text">{items.ServiceText}</div>
      </div>
    </div>
  ));
  return (
    <div>
      <Helmet>
        <title>Services | Clever minds technologies</title>
        <meta
          name="description"
          content="No matter what IT services you need, Clever minds technologies will be there to support every step of the way."
        />
        <meta
          name="keywords"
          content="Software, IT, Consultancy, Cloud, Development, Cyber Security"
        />
      </Helmet>
      <div className="services-list">{ServiceItems}</div>
    </div>
  );
};
