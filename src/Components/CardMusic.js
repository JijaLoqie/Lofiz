import { useEffect, useState } from "react";
import useSound from "use-sound"; // for handling the sound
import { AiFillPlayCircle, AiFillPauseCircle } from "react-icons/ai"; // icons for play and pause
import { IconContext } from "react-icons"; // for customazing the icons
import styles from "../Style/CardMusic.module.css";

// MediaPlayer

const CardMusic = ({ text, musaUrl }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [play, { pause, duration, sound }] = useSound(musaUrl);


  const playingButton = () => {
    if (isPlaying) {
      pause(); // this will pause the audio
      setIsPlaying(false);
    } else {
      //   stopAll();
      play(); // this will play the audio
      setIsPlaying(true);
    }
  };


  return (
    <span className={styles.component} onClick={playingButton}>
      <div className={styles.title}>{text}</div>
      <div>
        {!isPlaying ? (
          <button className={styles.playButton}>
            <IconContext.Provider value={{ size: "3em", color: "black" }}>
              <AiFillPlayCircle />
            </IconContext.Provider>
          </button>
        ) : (
          <button className={styles.playButton}>
            <IconContext.Provider value={{ size: "3em", color: "#27AE60" }}>
              <AiFillPauseCircle />
            </IconContext.Provider>
          </button>
        )}
      </div>
    </span>
  );
};

export default CardMusic;
