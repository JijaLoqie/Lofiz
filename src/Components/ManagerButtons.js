import { useState } from 'react';
import styles from "../Style/ManagerButtons.module.css"


const ManagerButtons = ({ toggles }) => {
  const [isHover, setIsHover] = useState(false);
  return (
    <div
      className={styles.ManagerButtons}
      onMouseLeave={() => setIsHover(false)}
      onMouseEnter={() => setIsHover(true)}
    >
      {isHover ? (
        <>
          <div className={styles.Button} onClick={toggles.Back}>
            Backs
          </div>
          <div className={styles.Button} onClick={toggles.Music}>
            Music
          </div>
          <div className={styles.Button} onClick={toggles.Design}>
            Design
          </div>
        </>
      ) : (
        "Lofiz"
      )}
    </div>
  );
};

export default ManagerButtons;