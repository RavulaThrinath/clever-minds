import React from "react";
import "../../Components/Form/Form.css";
import "./Contact.css";
import ContactContainer from "../Contact/ContactContainer/ContactContainer";
import { Helmet } from "react-helmet";

const Contact = (props) => {
  return (
    <div className="contact">
      <Helmet>
        <title>Contact | Clever minds technologies</title>
        <meta
          name="description"
          content="Let's talk about how we can bring your ideas to life together"
        />
        <meta
          name="keywords"
          content="Software, IT, Consultancy, Cloud, Development, Cyber Security"
        />
      </Helmet>
      <div className="header" style={{ backgroundColor: "#cad0da" }}>
        <div className="header-title">{props.title}</div>
      </div>
      <div className="contact-container">
        <ContactContainer />
      </div>
    </div>
  );
};

export default Contact;
