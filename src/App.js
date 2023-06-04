import { useState } from 'react';
import BlockImages from './Components/BlockImages';
import logo from './logo.svg';
import './Style/App.css';
import MediaPlayer from './Components/MediaPlayer';


import musaUrl1 from "./music/music1.m4a";
import musaUrl2 from "./music/music2.m4a";

function App() {
  const [mediaUrl, setMediaUrl] = useState("");

  const [images, setImages] = useState([
    {text: "image1", imgName: "image1.png"},
    {text: "image2", imgName: "image2.png"},
    {text: "image2", imgName: "image3.jpg"},
    {text: "image2", imgName: "image4.jpg"},
    {text: "image2", imgName: "image5.jpg"},
    {text: "image2", imgName: "image6.jpg"},
    {text: "image2", imgName: "image7.jpg"},
  ])

  const setBackground = (imageSrc) => {
    document.documentElement.style.cssText = `--c-background-image: url(${imageSrc}), url(${imageSrc})`;
  };

  return (
    <>
      <div className="Background"></div>
      <div className="App">
      <MediaPlayer text="Music 1" musa={musaUrl1}/>
      <MediaPlayer text="Music 2" musa={musaUrl2}/>
        <BlockImages
          images={images}
          setImages={setImages}
          setBackground={setBackground}
        ></BlockImages>
      </div>
    </>
  );
}

export default App;
