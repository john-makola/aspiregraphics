import styles from "../styles/thankyou.module.css";
import Image from "next/image";
import Link from "next/link";

import featured from "../images/thankyou.jpg";
const AboutUs = () => {
  return (
    <div className={styles.grid}>
      <div className={styles.imageContainer}>
        <Image
          src={featured}
          fill
          alt="Software Development"
          className={styles.image}
        />
      </div>
      <div className={styles.content}>
        <h2>Thank you for contacting us! </h2>
        <p>
          We appreciate your interest and value your feedback. Our team will
          review your message and get back to you as soon as possible.
        </p>
        <p>
          Our team is currently reviewing your inquiry and we will get back to
          you as soon as possible. Please note that our response time may vary
          depending on the complexity of your request, but we will do our best
          to provide you with a prompt and comprehensive reply.
        </p>
        <p>
          If you have any additional information or details that could help us
          better understand your needs, please do not hesitate to share them
          with us.
        </p>

        <p>
          Thank you for considering our services, and we look forward to
          speaking with you soon.
        </p>
        <p>Best regards,</p>
        <p>Aspire Graphics</p>
        <button className={styles.button}>
          <Link href="/">Home &#187; </Link>
        </button>
      </div>
    </div>
  );
};

export default AboutUs;
