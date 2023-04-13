import "./App.css";
import { Card } from "./Components/Card";
import { Navbar } from "./Components/Navbar";
import { photos } from "./data";
import UploadForm from "./Components/UploadForm";

import { useState } from "react";

function App() {
  const [isCollapsed, collapse] = useState(false);
  const toggle = () => collapse(!isCollapsed);
  return (
    <>
      <Navbar />
      <div className="container text-center mt-5">
        <button className="btn btn-success float-end" onClick={toggle}>
          {isCollapsed ? 'Close' : '+Add'}
        </button>
        <div className="clearfix mb-4"></div>
        <UploadForm isVisible={isCollapsed} />
        <h1>Gallery</h1>
        <div className="row">
          {photos.map((photo) => (
            <Card src={photo} />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
