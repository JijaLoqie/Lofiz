import styles from "../Style/MediaPlayer.module.css";

import CardMusic from "./CardMusic";

import musaUrl1 from "../music/music1.m4a";
import musaUrl2 from "../music/music2.m4a";
import { useState } from "react";

const MediaPlayer = ({ isOpen }) => {
  const [musicCards, setMusicCards] = useState([
    { url: musaUrl1, text: "Naruto Fight" },
    { url: musaUrl2, text: "Naruto God"},
  ]);

  return (
    <div className={styles.MediaPlayer} style={{display: isOpen ? `flex` : `none`}}>
      {musicCards.map((music, index) => {
        return <CardMusic key = {index}
          text={music.text}
          musaUrl={music.url}
        />;
      })}
    </div>
  );
};

export default MediaPlayer;
