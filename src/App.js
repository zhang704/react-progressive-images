import React from "react";
import images from "./images.json";
import ImageContainer from "./components/ImageContainer";
import "./App.css";

function App() {
  return (
    <div className="app">
      <div className="container">
        {images.map(res => (
          <div key={res.id} className="wrapper">
            <ImageContainer
              src={res.preview_urls.large}
              thumb={res.preview_urls.small}
              height={res.preview_urls.large_height}
              width={res.preview_urls.large_width}
              alt={""}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
export default App;