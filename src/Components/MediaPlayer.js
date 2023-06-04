import { useEffect, useState } from "react"; 
import useSound from "use-sound"; // for handling the sound
import { AiFillPlayCircle, AiFillPauseCircle } from "react-icons/ai"; // icons for play and pause
import { IconContext } from "react-icons"; // for customazing the icons
import styles from "../Style/MediaPlayer.module.css"



// MediaPlayer

const MediaPlayer = ({text, musa}) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [play, { pause, duration, sound }] = useSound(musa);

    const playingButton = () => {
        if (isPlaying) {
          pause(); // this will pause the audio
          setIsPlaying(false);
        } else {
          play(); // this will play the audio
          setIsPlaying(true);
        }
      };


      return (
        <span className={styles.component} onClick={playingButton}>
          <div className={styles.title}>
          {text}
          </div>
          <div>
          {!isPlaying ? (
              <button className={styles.playButton}>
                <IconContext.Provider value={{ size: "3em", color: "black" }}>
                  <AiFillPlayCircle />
                </IconContext.Provider>
              </button>
            ) : (
              <button className={styles.playButton} onClick={playingButton}>
                <IconContext.Provider value={{ size: "3em", color: "#27AE60" }}>
                  <AiFillPauseCircle />
                </IconContext.Provider>
              </button>
            )}
          </div>
        </span>
      );
}

export default MediaPlayer