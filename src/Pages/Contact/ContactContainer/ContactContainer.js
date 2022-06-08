import React from "react";
import "./ContactContainer.css";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaLinkedinIn,
} from "react-icons/fa";
import { ImLocation2 } from "react-icons/im";
import Form from "../../../Components/Form/Form";
import { contactContent, socialMediaLinks } from "../../../Data";
import { AiFillInstagram } from "react-icons/ai";

const ContactContainer = () => {
  return (
    <div>
      <div className="form-container">
        <div className="container-left">
          <div className="left-content">
            <div className="left1">
              <div className="icons">
                <ImLocation2 style={{ color: "#ffffff" }} />
                <a
                  href="https://goo.gl/maps/9uxGwF74YU74eth68"
                  rel="noreferrer"
                  target="_blank"
                >
                  {contactContent.contactAddress}
                </a>
              </div>
              <div className="icons">
                <FaPhoneAlt style={{ color: "#ffffff" }} />{" "}
                <a href="tel:13616603451">{contactContent.contactNumber}</a>
              </div>
              <div className="icons">
                <FaEnvelope style={{ color: "#ffffff" }} />{" "}
                <a href="mailto:info@techlabit.com">{contactContent.EmailID}</a>
              </div>
            </div>
            <div className="left3">
              <a href={socialMediaLinks.insta} target="_blank" rel="noreferrer">
                <FaFacebookF />
              </a>
              <a href={socialMediaLinks.insta} target="_blank" rel="noreferrer">
                <AiFillInstagram />
              </a>
              <a
                href={socialMediaLinks.linkedin}
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>
        <div className="container-right">
          <Form />
        </div>
      </div>
    </div>
  );
};

export default ContactContainer;
