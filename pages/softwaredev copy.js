import styles from "../styles/software.module.css";
import Image from "next/image";
import { useRouter } from "next/router";

import featured from "../images/webapps.png";
import Link from "next/link";
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
        <h1 style={{ textAlign: "center" }}>
          Building Web Apps and Management Information Systems for Organisations
        </h1>
        <p>
          The need for businesses and individuals to continuously improve their
          :
        </p>
        <ol>
          <li>
            <p>
              Optimizing Systems Performances : Business processes - Production
              pipelines
            </p>
          </li>
          <li>
            <p>Tuning Systems for Efficiency and High Availability </p>
          </li>
          <li>
            <p>Enhancing User Experience(UX) and User Interfaces (UI)</p>
          </li>
          <li>
            <p>
              Business Intelligence: Managing Big Data, Structured, Unstructured
              for Analytics and Business
            </p>
          </li>
        </ol>
        <p>
          and ensure that they stay top of their business strategies, has driven
          us to tailor custom Web-Apps solutions to meet each need effectively.
        </p>

        <h2>Our Range of tailor made products includes</h2>
        <div>
          <ol style={{ background: "#D2D3D5" }}>
            <li>
              <p>Marketing Web Apps</p>
            </li>
            <li>
              <p>Business Portals</p>
            </li>
            <li>
              <p>Financial Portals</p>
            </li>
            <li>
              <p>Learning Magement Systems</p>
            </li>
            <li>
              <p>Ecommerce Solutions</p>
            </li>
          </ol>
          <button
            onClick={HandleContact}
            className={styles.button}
            style={{ float: "right" }}
          >
            <Link href="/contact">Get in Touch &#187; </Link>
          </button>
        </div>

        <p>
          We use agile methods to tailor make our client solutions. We
          meticulously walk the development journey stages with our clients,
          from ideation, requirements sourcing, designs, tests development,
          iterating through each stage well to achieve the desired solution.
          Once done we help our clients with deployments on CDNs and successive
          maintenance platforms desired.
        </p>
      </div>
    </div>
  );
};

export default SoftwareDev;
