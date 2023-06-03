import styles from "../Style/ImageCard.module.css"

const ImageCard = ({imgName, text}) => {
    var imageSrc = require(`../../public/Images/${imgName}`);
    return <img className={styles.ImageCard} src={imageSrc} alt={text}></img>;
}

export default ImageCard;