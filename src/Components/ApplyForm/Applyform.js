// import React, { useState } from "react";
// import "./Applyform.css";
// import Form from "react-bootstrap/Form";
// // import { useFormik } from "formik";
// // import * as yup from "yup";
// import { db, storage } from "../../firebase";
// import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
// import { collection, addDoc } from "firebase/firestore";
// // import Swal from "sweetalert2";

// const Applyform = () => {
//   const [firstName, setFirstName] = useState("");
//   const [lastName, setLastName] = useState("");
//   const [gmail, setGmail] = useState("");
//   const [phone, setPhone] = useState("");
//   const [addressM, setAddressM] = useState("");
//   const [addressS, setAddressS] = useState("");
//   const [city, setCity] = useState("");
//   const [zip, setZip] = useState("");
//   const [progress, setProgress] = useState(0);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     try {
//       const file = e.target[0].files[0];
//       const sotrageRef = ref(storage, `files/${file.name}`);
//       const uploadTask = uploadBytesResumable(sotrageRef, file);

//       uploadTask.on("state_changed", (snapshot) => {
//         const prog = Math.round(
//           (snapshot.bytesTransferred / snapshot.totalBytes) * 100
//         );
//         setProgress(prog);
//       });

//       const docRef = addDoc(collection(db, "Application Form"), {
//         FirstName: firstName,
//         LastName: lastName,
//         Email: gmail,
//         Number: phone,
//         Address1: addressM,
//         Address2: addressS,
//         City: city,
//         ZipCode: zip,
//       });
//       console.log("Document written with ID: ", docRef.id);
//     } catch (error) {
//       console.log(error.message);
//     }
//     setFirstName("");
//     setLastName("");
//     setGmail("");
//     setPhone("");
//     setAddressM("");
//     setAddressS("");
//     setCity("");
//     setZip("");
//   };

//   return (
//     <div className="application-form">
//       <Form className="application" onSubmit={handleSubmit}>
//         <div className="groupfield">
//           <Form.Group className="field" controlId="formGridFirstName">
//             <Form.Label>First name</Form.Label>
//             <Form.Control
//               type="text"
//               placeholder="Enter your first name"
//               name="firstName"
//               required
//               value={firstName}
//               onChange={(e) => setFirstName(e.target.value)}
//               size="lg"
//             />
//             <Form.Control.Feedback type="invalid">
//               Please enter your first Name
//             </Form.Control.Feedback>
//           </Form.Group>

//           <Form.Group className="field" controlId="formGridLastName">
//             <Form.Label>Last Name</Form.Label>
//             <Form.Control
//               type="text"
//               placeholder="Enter your last name"
//               required
//               value={lastName}
//               onChange={(e) => setLastName(e.target.value)}
//               size="lg"
//             />
//             <Form.Control.Feedback type="invalid">
//               Please enter your last Name
//             </Form.Control.Feedback>
//           </Form.Group>
//         </div>
//         <div className="groupfield">
//           <Form.Group className="field" controlId="formGridEmail">
//             <Form.Label>Email</Form.Label>
//             <Form.Control
//               type="text"
//               placeholder="Enter your email"
//               required
//               value={gmail}
//               onChange={(e) => setGmail(e.target.value)}
//               size="lg"
//             />
//             <Form.Control.Feedback type="invalid">
//               Please enter your email
//             </Form.Control.Feedback>
//           </Form.Group>

//           <Form.Group className="field" controlId="formGridNumber">
//             <Form.Label>Phone</Form.Label>
//             <Form.Control
//               type="text"
//               placeholder="Enter your number"
//               required
//               value={phone}
//               onChange={(e) => setPhone(e.target.value)}
//               size="lg"
//             />
//             <Form.Control.Feedback type="invalid">
//               Please enter your phone number
//             </Form.Control.Feedback>
//           </Form.Group>
//         </div>

//         <Form.Group className="mb-3" controlId="formGridAddress1">
//           <Form.Label>Address</Form.Label>
//           <Form.Control
//             placeholder="1234 Main St"
//             required
//             value={addressM}
//             onChange={(e) => setAddressM(e.target.value)}
//             size="lg"
//           />
//           <Form.Control.Feedback type="invalid">
//             Please enter your address
//           </Form.Control.Feedback>
//         </Form.Group>

//         <Form.Group className="mb-3" controlId="formGridAddress2">
//           <Form.Label>Address 2</Form.Label>
//           <Form.Control
//             placeholder="Apartment, studio, or floor"
//             required
//             value={addressS}
//             onChange={(e) => setAddressS(e.target.value)}
//             size="lg"
//           />
//           <Form.Control.Feedback type="invalid">
//             Please enter your address
//           </Form.Control.Feedback>
//         </Form.Group>
//         <div className="groupfield">
//           <Form.Group className="field" controlId="formGridCity">
//             <Form.Label>City</Form.Label>
//             <Form.Control
//               placeholder="e.g. San Francisco"
//               required
//               value={city}
//               onChange={(e) => setCity(e.target.value)}
//               size="lg"
//             />
//             <Form.Control.Feedback type="invalid">
//               Please enter your city
//             </Form.Control.Feedback>
//           </Form.Group>

//           <Form.Group className="field" controlId="formGridZip">
//             <Form.Label>Zip</Form.Label>
//             <Form.Control
//               placeholder="e.g. 94101"
//               required
//               value={zip}
//               onChange={(e) => setZip(e.target.value)}
//               size="lg"
//             />
//             <Form.Control.Feedback type="invalid">
//               Please enter your Zip code
//             </Form.Control.Feedback>
//           </Form.Group>
//         </div>

//         <Form.Group controlId="formFile" className="mb-3">
//           <Form.Label>Upload Resume</Form.Label>
//           <Form.Control type="file" size="lg" />
//           <Form.Control.Feedback type="invalid">
//             Please add your resume
//           </Form.Control.Feedback>
//         </Form.Group>
//         <div className="btn-container">
//           <button className="stb-btn" type="submit">
//             Submit
//           </button>
//         </div>
//       </Form>
//       <h2>Uploading done {progress}%</h2>
//     </div>
//   );
// };

// export default Applyform;
