import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import "../../Pages/Contact/Contact.css";
import "./Form.css";
import TextField from "@mui/material/TextField";
import { db } from "../../firebase";
import Swal from "sweetalert2";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      const docRef = addDoc(collection(db, "Contact Page"), {
        Name: name,
        Email: email,
        Number: number,
        Message: message,
      });
      Swal.fire(
        "Message Sent!",
        "Our Team will contact you as soon as possible",
        "success"
      );
      console.log("Document written with ID: ", docRef.id);
    } catch (error) {
      console.log(error.message);
    }
    setName("");
    setEmail("");
    setNumber("");
    setMessage("");
  };

  // Form Validation
  // const formik = useFormik({
  //   initialValues: {
  //     fullName: "",
  //     phone: "",
  //     email: "",
  //     message: "",
  //   },
  //   validationSchema: yup.object({
  //     fullName: yup.string().required("Name is Required"),
  //     phone: yup.string().required("Phone is Required"),
  //     email: yup.string().required("Email is Required"),
  //     message: yup.string().required("Message is Required"),
  //   }),
  // });

  return (
    <div>
      <form onSubmit={handleSubmit} className="formclass">
        <TextField
          id="outlined-basic"
          label="Name"
          variant="standard"
          name="fullName"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          // error={formik.touched.fullName && Boolean(formik.errors.fullName)}
          // onBlur={formik.handleBlur}
          // helperText={formik.touched.fullName && formik.errors.fullName}
        />
        <TextField
          id="outlined-basic"
          label="Email Address"
          variant="standard"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          // error={formik.touched.email && Boolean(formik.errors.email)}
          // onBlur={formik.handleBlur}
          // helperText={formik.touched.email && formik.errors.email}
        />
        <TextField
          id="outlined-basic"
          label="Phone Number"
          variant="standard"
          name="phone"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          required
          // error={formik.touched.phone && Boolean(formik.errors.phone)}
          // onBlur={formik.handleBlur}
          // helperText={formik.touched.phone && formik.errors.phone}
        />
        <TextField
          id="outlined-basic"
          label="Message"
          variant="standard"
          rows={2}
          multiline
          value={message}
          name="message"
          onChange={(e) => setMessage(e.target.value)}
          required
          // error={formik.touched.message && Boolean(formik.errors.message)}
          // onBlur={formik.handleBlur}
          // helperText={formik.touched.message && formik.errors.message}
        />

        <button type="submit" className="Send-button">
          <div className="svg-wrapper-1">
            <div className="svg-wrapper">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
              >
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path
                  fill="currentColor"
                  d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                ></path>
              </svg>
            </div>
          </div>
          <span>Send</span>
        </button>
      </form>
    </div>
  );
};

export default Form;
