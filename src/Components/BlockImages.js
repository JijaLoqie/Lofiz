import styles from "../Style/BlockImages.module.css"
import ImageCard from "./ImageCard";


const BlockImages = ({images, setBackground}) => {
    const imagesArray = [...images];
    return <div className={styles.BlockImages}>
        {imagesArray.map((image, ind) => {
            return (<ImageCard key={ind} imgName={image.imgName} text={image.text} setBackground={setBackground}/>)
        })}
    </div>
}

export default BlockImages;