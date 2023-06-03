import { useState } from 'react';
import BlockImages from './Components/BlockImages';
import logo from './logo.svg';
import './Style/App.css';

function App() {
  const [images, setImages] = useState([
    {text: "image1", imgName: "image1.png"},
    {text: "image2", imgName: "image2.png"},
    {text: "image2", imgName: "image2.png"},
    {text: "image2", imgName: "image2.png"},
    {text: "image2", imgName: "image2.png"},
    {text: "image2", imgName: "image2.png"},
  ])
  return (
    <div className="App">
      <BlockImages images={images} setImages={setImages}></BlockImages>
    </div>
  );
}

export default App;
