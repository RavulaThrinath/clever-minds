import React, { useState } from "react";
import "./Career.css";
import CareerCover from "../../Assets/Career Image.png";
// import Backup from "../../Components/ApplyForm/Backup";
import { ImLocation2 } from "react-icons/im";
import { jobOpenings } from "../../Data";
import "../../App.css";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { Form } from "react-bootstrap";
import { storage } from "../../firebase";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { Helmet } from "react-helmet";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
const Careers = (props) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleSubmit = (e) => {
    //
    e.preventDefault();
    const file = e.target[0].files[0];
    if (!file) return;
    const sotrageRef = ref(storage, `Resume/${file.name}`);
    const uploadTask = uploadBytesResumable(sotrageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {},
      (error) => alert(error),
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          alert("Uploaded Succesfully");
          setOpen(false);
          console.log("File available at", downloadURL);
        });
      }
    );
  };
  return (
    <div className="career">
      <Helmet>
        <title>Career | Clever minds technologies</title>
        <meta
          name="description"
          content="If you are ready to take up challenges, ​are passionate about your career, and​ want to make a difference, we are looking​ for you at GlobalEdge."
        />
        <meta
          name="keywords"
          content="Software, IT, Consultancy, Cloud, Development, Cyber Security"
        />
      </Helmet>
      <div className="header" style={{ background: "#d8eacc" }}>
        <div className="header-content">
          <div className="header-title">{props.title}</div>
          <div className="header-image">
            <img src={CareerCover} alt="" />
          </div>
        </div>
      </div>
      <div className="career-content">
        <div className="grow-container">
          <h1>Join Our Team</h1>
          <p>
            At Clever minds technologies, we focus on hiring industry experienced talent or
            fresh college graduates. We hire passionate people and encourage
            them to make their dreams a reality through hard work, a friendly
            environment, and creativity fostered by people from diverse
            backgrounds who provide varying perspectives. We have a hospitable,
            supportive, and collegial environment that values both work and fun.
            There are no walls and limits that block your intellectual
            development. We have partnered with leading companies and industry
            experts to bring the best software products to our customers.
          </p>
          <button className="cv-btn" onClick={handleClickOpen}>
            <span className="button_cv">Send CV</span>
          </button>
          <Dialog
            open={open}
            TransitionComponent={Transition}
            keepMounted
            onClose={handleClose}
            aria-describedby="alert-dialog-slide-description"
            id="maindialog"
          >
            <DialogTitle className="dialogtitlee">
              {"Let's grow together"}
            </DialogTitle>
            <DialogContent>
              <DialogContentText
                className="dialogdes"
                id="alert-dialog-slide-description"
              >
                If you are ready to take up challenges, ​are passionate about
                your career, and​ want to make a difference, we are looking​ for
                you at Clever minds technologies
              </DialogContentText>
              <div>
                <form onSubmit={handleSubmit}>
                  <Form.Group controlId="formFile" className="mb-3">
                    <Form.Label>Upload your CV</Form.Label>
                    <Form.Control type="file" />
                    <Form.Control.Feedback type="invalid">
                      Please add your resume
                    </Form.Control.Feedback>
                  </Form.Group>
                  <DialogActions className="action-btn">
                    <button className="close-btn" onClick={handleClose}>
                      Cancel
                    </button>
                    <button type="submit" className="css-button-sharp--black">
                      Submit
                    </button>
                  </DialogActions>
                </form>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </div>
  );
};

export default Careers;

// <div className="apply-content">
//   <h1>Work With Us​</h1>
//   <p>
//     {`If you are ready to take up challenges, ​are passionate about your career, \n and​ want to make a difference, we are looking​ for you at GlobalEdge.`}
//   </p>
// </div>;
// <div className="caerer-image">
//   <img src={CareerCover} alt="" />
// </div>;

export const CurrentOpenings = () => {
  const jobsList = jobOpenings.map((jobDescription) => (
    <div key={jobDescription.id} className="job-container">
      <p className="job-title">{jobDescription.jobTitle} </p>
      <p className="job-place">
        {" "}
        <ImLocation2 />
        {jobDescription.jobLocation}
      </p>
    </div>
  ));
  return <div className="joblist">{jobsList}</div>;
};
