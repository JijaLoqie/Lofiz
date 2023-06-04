import styles from "../Style/ImageCard.module.css";

const ImageCard = ({ setBackground, imgName, text }) => {
  var imageSrc = require(`../../public/Images/${imgName}`);
  return (
    <img
      className={styles.ImageCard}
      src={imageSrc}
      alt={text}
      onClick={() => setBackground(imageSrc)}
    />
  );
};

export default ImageCard;
