import React from 'react';

function FileUpload({ onFilesSelected }) {
  const handleFileChange = (e) => {
    onFilesSelected(e.target.files);
  };

  return (
    <div>
      <input
        type="file"
        multiple
        accept="image/*"
        onChange={handleFileChange}
      />
    </div>
  );
}

export default FileUpload;
