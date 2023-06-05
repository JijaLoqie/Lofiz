import { useState } from 'react';
import styles from "../Style/BlockImages.module.css"
import ImageCard from "./ImageCard";


const BlockImages = ({isOpen, images, setBackground}) => {
    const imagesArray = [...images];
    return isOpen ? (
      <div className={styles.BlockImages}>
        {imagesArray.map((image, ind) => {
          return (
            <ImageCard
              key={ind}
              imgName={image.imgName}
              text={image.text}
              setBackground={setBackground}
            />
          );
        })}
      </div>
    ) : (
      <div></div>
    );
}

export default BlockImages;