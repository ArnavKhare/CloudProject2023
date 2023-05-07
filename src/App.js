import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import UploadImages from "./components/image-upload.component";

function App() {
  return (
    <div className="container">
      <h3> AWS Bucket</h3>
      <h4>Upload the Images to AWS Bucket and get shareable Link</h4>

      <div className="content">
        <UploadImages />
      </div>
    </div>
  );
}

export default App;
