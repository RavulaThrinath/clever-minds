import React from "react";
import { Link } from "react-router-dom";
import "./ServicesList.css";
import { hServicesList } from "../../../Data";

const ServicesList = () => {
  const homeServicesList = hServicesList.map((list) => (
    <div key={list.id} className="list-container">
      <img src={require(`../../../Assets/${list.Imageid}.gif`)} alt="" />
      <h1 className="list-title">{list.title}</h1>
      <p className="list-text">{list.text}</p>
      <Link to="./services">
        <button className="cta">
          <span className="hover-underline-animation"> Know More </span>
          <svg
            id="arrow-horizontal"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="10"
            viewBox="0 0 46 16"
            color="#000000"
            opacity=".7"
          >
            <path
              id="Path_10"
              data-name="Path 10"
              d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z"
              transform="translate(30)"
            ></path>
          </svg>
        </button>
      </Link>
    </div>
  ));

  return (
    <div>
      <div className="hservices-list">{homeServicesList}</div>
    </div>
  );
};

export default ServicesList;
