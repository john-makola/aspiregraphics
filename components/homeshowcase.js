import styles from "../styles/HomeShowCase.module.css";
import Image from "next/image";
import computers from "../images/computer.jpg";
import printers from "../images/printer.jpg";

const HomeShowcase = () => {
  return (
    <div className={styles.grid}>
      <div className={styles.computers}>
        <h3>Software Developer?</h3>
        <span>Web Apps, MIS, CRMs</span>
        <div className={styles.imageContainer}>
          <Image
            src={computers}
            fill
            alt="Web Apps, MIS & CRMs"
            className={styles.image}
          />
        </div>
        <button>More Info</button>
      </div>
      <div className={styles.printers}>
        <h3>Graphics Designer HCI{`(UI/UX)`}</h3>
        <span> Printing, or Branding</span>
        <div className={styles.imageContainer}>
          <Image
            src={printers}
            fill
            alt="Print and Branding"
            className={styles.image}
          />
        </div>
        <button>More Info</button>
      </div>
    </div>
  );
};

export default HomeShowcase;
