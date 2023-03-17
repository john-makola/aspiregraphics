import Image from "next/image";
import SliderImage from "../images/SliderImage.png";
import styles from "../styles/Home.module.css";
const Slider = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.motivation}>
          <h5>"Innovation is change that unlocks new value."</h5>
          <p>- Jamie Notter</p>
        </div>

        <div className={styles.imageContainer}>
          <Image
            src={SliderImage}
            fill
            alt="Power of Coding"
            className={styles.image}
          />
        </div>
      </div>
    </>
  );
};

export default Slider;
