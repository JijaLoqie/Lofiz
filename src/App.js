import { useState } from "react";
import BlockImages from "./Components/BlockImages";
import "./Style/App.css";

import ManagerButtons from "./Components/ManagerButtons";
import MediaPlayer from './Components/MediaPlayer';

function App() {
  const [backOpen, setBackOpen] = useState(false);
  const [musicOpen, setMusicOpen] = useState(false);
  const [designOpen, setDesignOpen] = useState(false);

  const [images, setImages] = useState([
    { text: "image1", imgName: "image1.png" },
    { text: "image2", imgName: "image2.png" },
    { text: "image2", imgName: "image3.jpg" },
    { text: "image2", imgName: "image4.jpg" },
    { text: "image2", imgName: "image5.jpg" },
    { text: "image2", imgName: "image6.jpg" },
    { text: "image2", imgName: "image7.jpg" },
  ]);

  const setBackground = (imageSrc) => {
    document.documentElement.style.cssText = `--c-background-image: url(${imageSrc}), url(${imageSrc})`;
  };

  return (
    <>
      <div className="Background"></div>
      <div className="App">
		<MediaPlayer isOpen={musicOpen}/>
        <BlockImages
          images={images}
		  isOpen={backOpen}
          setImages={setImages}
          setBackground={setBackground}
        ></BlockImages>
        <ManagerButtons
          toggles={{
            Back: () => {setBackOpen((opened) => !opened)},
            Music: ()=> {setMusicOpen((opened) => !opened)},
            Design: ()=> {setDesignOpen((opened) => !opened)},
          }}
        />
      </div>
    </>
  );
}

export default App;
