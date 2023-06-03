import styles from "../Style/BlockImages.module.css"
import AddImageButton from "./AddImageButton";
import ImageCard from "./ImageCard";
import axios from "axios"


const BlockImages = ({images, setImages}) => {


    const setBackground = () => {

    }
    const addNewCard = (image) => {
        const formData = new FormData();
        formData.append('image', image);
        axios.post('url', formData).then((res) => {
            console.log("axios res:", res);
        })
        
    }
    const imagesArray = [...images];
    return <div className={styles.BlockImages}>
        {imagesArray.map((image, ind) => {
            return (<ImageCard key={ind} imgName={image.imgName} text={image.text} handlerClick={setBackground}/>)
        })}
        <AddImageButton handlerAdd={addNewCard}/>
    </div>
}

export default BlockImages;