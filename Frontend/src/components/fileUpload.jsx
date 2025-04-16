import React from "react"
import "../styles/FileUpload.css";
import { useState } from "react";

function FileUpload() {

  const [files, setFiles] = useState([]); 
  const handleFileChange = (event) => {
    const selectedFiles = Array.from(event.target.files);
    setFiles(selectedFiles);
  };

  return (
  
    <div className="container">
      <input
        type="file"
        id="file-input"
        multiple
        onChange={handleFileChange} 
      />
      <label className="file_label" htmlFor="file-input">
        <i className="fa-solid fa-arrow-up-from-bracket"></i>
        &nbsp; Choose Files To Upload
      </label>
      <div id="num-of-files">
        {files.length > 0 ? `${files.length} Files Selected` : "No Files Chosen"}
      </div>
      <ul id="files-list">
        {files.map((file, index) => {
          const fileSizeKB = (file.size / 1024).toFixed(1);
          const fileSize =
            fileSizeKB >= 1024
              ? `${(fileSizeKB / 1024).toFixed(1)} MB`
              : `${fileSizeKB} KB`;

          return (
            <li key={index}>
              <p>{file.name}</p>
              <p>{fileSize}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default FileUpload;