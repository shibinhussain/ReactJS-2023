import "./App.css";
import { Card } from "./Components/Card";
import { Navbar } from "./Components/Navbar";
import { photos } from "./data";
import UploadForm from "./Components/UploadForm";

import { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState();
  const [input, setInput] = useState({
    title: null,
    file: null,
    path: null,
  });
  const [isCollapsed, collapse] = useState(false);
  const toggle = () => collapse(!isCollapsed);
  const [items, setItems] = useState(photos);

  const handleOnChange = (e) => {
    if (e.target.name === "file") {
      setInput({
        ...items,
        file: e.target.files[0],
        path: URL.createObjectURL(e.target.files[0]),
      });
    } else {
      setInput({ ...input, title: e.target.value });
    }
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    setItems([input.path, ...items]);
  };

  useEffect(() => {
    setCount(`you have ${items.length} image${items.length > 1 ? "s" : ""}`);
  }, [items]);

  return (
    <>
      <Navbar />
      <div className="container text-center mt-5">
        <button className="btn btn-success float-end" onClick={toggle}>
          {isCollapsed ? "Close" : "+Add"}
        </button>
        <div className="clearfix mb-4"></div>
        <UploadForm
          isVisible={isCollapsed}
          onChange={handleOnChange}
          onSubmit={handleOnSubmit}
        />
        {count}
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
