import React, { useState } from "react";
import "./Applyform.css";
import { storage } from "../../firebase";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";

const Applyform = (props) => {
  const [progress, setProgress] = useState(0);
  const handleSubmit = (e) => {
    //
    e.preventDefault();
    const file = e.target[0].files[0];
    if (!file) return;
    const sotrageRef = ref(storage, `files/${file.name}`);
    const uploadTask = uploadBytesResumable(sotrageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const prog = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(prog);
      },
      (error) => console.log(error),
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log("File available at", downloadURL);
        });
      }
    );
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="file" className="input" />
        <button type="submit">Upload</button>
      </form>
    </div>
  );
};

export default Applyform;

// <form onSubmit={formHandler}>
//         <input type="file" className="input" />
//         <button type="submit">Upload</button>
//       </form>
//       <hr />
//       <h2>Uploading done {progress}%</h2>
