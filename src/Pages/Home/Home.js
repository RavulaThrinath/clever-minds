import React, { useState } from "react";
import "./Home.css";
import HomeImage from "../../Assets/LandingImage.png";
import { landingPage, contactContent, socialMediaLinks } from "../../Data";
import HService from "../../Components/H-Service/HService";
import HAbout from "../../Components/HAbout/HAbout";
import { Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { Helmet } from "react-helmet";
import Hcontact from "../../Components/Hcontact/Hcontact"

const Home = (props) => {
  const [show, setShow] = useState(false);

  const handleClickOpen = () => {
    setShow(true);
  };

  const handleClose = () => {
    setShow(false);
    // f8fbfd
  };
  return (
    <div
      style={{
        backgroundImage: "linear-gradient( to bottom ,#ffffff, #f8fcff)",
      }}
    >
      <Helmet>
        <meta charSet="utf-8" />
        <title>Clever minds technologies</title>
      </Helmet>
      <div className="home">
        <div className="landing">
          <div className="landing-content">
            <div className="left-landing">
              <h1 className="main-title">{landingPage.mainTitle}</h1>
              <p className="sub-title">{landingPage.subTitle}</p>
              <button className="btn-grad" onClick={handleClickOpen}>
                Get in touch
              </button>
              <Modal
                show={show}
                onHide={handleClose}
                aria-labelledby="example-custom-modal-styling-title"
                centered
                dialogClassName="mailmodal"
              >
                <Modal.Header closeButton>
                  <Modal.Title id="modal-title"></Modal.Title>
                  <div id="modal-title">Get in touch</div>
                </Modal.Header>
                <Modal.Body className="modalbody">
                  <div className="dialog-content">
                    <div className="formdetails">
                      <a
                        href="https://goo.gl/maps/9uxGwF74YU74eth68"
                        rel="noreferrer"
                        target="_blank"
                      >
                        {contactContent.contactAddress}
                      </a>
                      <a href="tel:13616603451">
                        {contactContent.contactNumber}
                      </a>
                      <a href="mailto:info@techlabit.com">
                        {contactContent.EmailID}
                      </a>
                      <div className="social-iconss">
                        <a
                          href={socialMediaLinks.linkedin}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <FaFacebookF />
                        </a>
                        <a
                          href={socialMediaLinks.insta}
                          target="_blank"
                          rel="noreferrer"
                        >
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
                </Modal.Body>
              </Modal>
            </div>
            <div className="right-landing">
              <img src={HomeImage} alt="" />
            </div>
          </div>
        </div>
      </div>
      <HAbout />
      <HService />
      <Hcontact />
    </div>
  );
};

export default Home;

// <BootstrapDialog
// onClose={handleClose}
// aria-labelledby="customized-dialog-title"
// open={open}
// >
// <BootstrapDialogTitle
//   id="customized-dialog-title"
//   onClose={handleClose}
// >
//   Get in touch
// </BootstrapDialogTitle>
// <DialogContent>
//   <DialogContentText>
//     <div className="dialog-content">
//       <div className="dialogimg">
//         <img src={DialogWelcome} alt="" />
//       </div>
//       <div className="formdetails">
//         {contactContent.contactAddress}
//       </div>
//     </div>
//   </DialogContentText>
// </DialogContent>
// </BootstrapDialog>
