import { useState } from 'react';
import BlockImages from './Components/BlockImages';
import logo from './logo.svg';
import './Style/App.css';

function App() {
  const [images, setImages] = useState([
    {text: "image1", imgName: "image1.png"},
    {text: "image2", imgName: "image2.png"},
    {text: "image2", imgName: "image3.jpg"},
    {text: "image2", imgName: "image4.jpg"},
    {text: "image2", imgName: "image5.jpg"},
    {text: "image2", imgName: "image6.jpg"},
  ])

  const setBackground = (imageSrc) => {
    document.documentElement.style.cssText = `--c-background-image: url(${imageSrc}), url(${imageSrc})`;
  };
  return (
    <>
      <div className="Background"></div>
      <div className="App">
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
