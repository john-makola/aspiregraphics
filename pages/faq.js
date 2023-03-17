import styles from "../styles/faq.module.css";
import Image from "next/image";
import { useRouter } from "next/router";

import featured from "../images/webapps.png";
import Link from "next/link";
import FaqQuestionsPrinters from "@/components/faqQuestionsprinters";
import FaqQuestionsComputers from "@/components/faqQuestionsComputers";
const SoftwareDev = () => {
  const router = useRouter();
  const HandleContact = () => {
    router.push("/contact");
  };
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
        <h2 style={{ textAlign: "center" }}>Frequently asked Questions</h2>
        <p
          style={{
            textAlign: "center",
            color: "var(--mainGreen)",
            fontWeight: "bold",
          }}
        >
          Lets try and address your queries.
        </p>
        <div className={styles.content1}>
          <FaqQuestionsPrinters />
          <FaqQuestionsComputers />
        </div>
      </div>
    </div>
  );
};

export default SoftwareDev;
