import { useEffect, useRef } from "react";
import styles from "../Style/AddImageButton.module.css"

const AddImageButton = ({ handlerAdd }) => {
    const inputFile = useRef(null);


    const onButtonClick = () => {
        inputFile.current.click()
    };


    return <>
        <button onClick={() => console.log(onButtonClick())}>Open file upload window</button>
        <input className={styles.AddImageButton} type='file' id='file' onChange={
                () => handlerAdd(inputFile.current.files[0])
            } ref={inputFile} style={{ display: 'none' }} />
    </>
}

export default AddImageButton;