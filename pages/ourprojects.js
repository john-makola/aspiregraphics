import styles from "../styles/software.module.css";
import Image from "next/image";
import { useRouter } from "next/router";

import featured from "../images/webapps.png";
import Link from "next/link";

import { getOurProjects, getServices } from "../data/ourprojects";
import FaqQuestionsComputers from "@/components/faqQuestionsComputers1";
const OurProjects = () => {
  const router = useRouter();
  const HandleContact = () => {
    router.push("/contact");
  };

  const OurProjects = getOurProjects();
  const webServices = getServices();
  return (
    <div className={styles.grid}>
      <div className={styles.imageContainer}>
        <Image
          src={featured}
          fill
          alt="Software Development"
          className={styles.image}
        />
        <div className={styles.faq}>
          <FaqQuestionsComputers />
        </div>
      </div>

      <div className={styles.content}>
        {OurProjects.map((item) => (
          <div key={item.id}>
            <h3 style={{ textAlign: "center" }}>{item.title}</h3>
            <p>{item.intro}</p>
            <p>{item.paragraph1}</p>
            <p>{item.paragraph2}</p>
            <h5 style={{ textAlign: "center" }}>{item.subTitle}</h5>
          </div>
        ))}
        {webServices.map((subItem) => (
          <div key={subItem.id}>
            <ul>
              <li>
                <span>{subItem.title}</span> {""} {subItem.description}
              </li>
            </ul>
          </div>
        ))}
        <button
          onClick={HandleContact}
          className={styles.button}
          style={{ float: "right" }}
        >
          <Link href="/contact">Get in Touch &#187; </Link>
        </button>
        {OurProjects.map((item) => (
          <div key={item.id}>
            <p>{item.paragraph3}</p>
            <p>{item.conclusion}</p>
            <Image
              src={item.contentPic}
              fill
              alt="Content Pic"
              className={styles.image}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurProjects;
