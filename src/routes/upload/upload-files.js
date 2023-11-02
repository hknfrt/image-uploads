import React from "react";
//import FormInput from '../../components/form-input/form-input.component'

import './upluad.style.css'

const UploadFiles = () => {
  return (
    <div className="upload-container">
      {/* <div className="revlvant">
        <h2> Relevant Info</h2>
        <img src="/public/lock.jpg" width='500px' height='500px' alt="lock"
        
        />
      </div> */}
      <div> 
        <h2>Upload Files</h2>
      <form className="upload-form">
        <label>Upload Files</label>
        <input type="file" placeholder="Browse"/>
        <label> Title</label>
        <textarea rows="10" cols="30" type="textarea"></textarea>
        <label> Description</label>
        <input type="text" />
        <label> Encryption Key</label>
        <input type="text" />
        <label> Filename</label>
        <input type="text" />
        <label> File Size</label>
        <input type="text" />
      </form>
      </div>
    </div>
  );
};

export default UploadFiles;
