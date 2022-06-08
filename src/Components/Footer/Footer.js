import React from "react";
import "./Footer.css";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { Link } from "react-router-dom";
import { socialMediaLinks } from "../../Data";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min";

function Footer() {
  return (
    <div className="footer-dark">
      <footer className="footer-container">
        <div className="footer-top">
          <div className="top-1">
            <h3>Clever minds technologies</h3>
            <p>
              At Clever minds technologies, we believe that technology should support and
              enhance your organization’s success, not constrain it. With our
              wide range of best-in-class services, we provide customized
              solutions that fit your unique IT needs.
            </p>
          </div>
          <div className="footer-item">
            <h3>Services</h3>
            <ul>
              <li>
                <Link to="./services">Infrastructure Managment</Link>
              </li>
              <li>
                <Link to="./services">Network Services</Link>
              </li>
              <li>
                <Link to="./services">Cyber Security</Link>
              </li>
            </ul>
          </div>
          <div className="footer-item">
            <h3>Overview</h3>
            <ul>
              <li>
                <Link to="./about">About</Link>
              </li>
              <li>
                <Link to="./careers">Careers</Link>
              </li>
              <li>
                <Link to="./contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="copyright"><Link to="./" className="cp-name">Clever minds technologies</Link> © 2022</p>
          <div className="social-icons">
            <a href={socialMediaLinks.linkedin} target="_blank" rel="noreferrer">
              <FaFacebookF />
            </a>
            <a href={socialMediaLinks.insta} target="_blank" rel="noreferrer">
              <AiFillInstagram />
            </a>
            <a href={socialMediaLinks.linkedin} target="_blank" rel="noreferrer">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
