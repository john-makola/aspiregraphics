import Link from "next/link";
import styles from "../styles/footer.module.css";

const Footer = () => {
  return (
    <>
      <div className={styles.grid}>
        <div className={styles.card}>
          <p>Software</p>
          <h1>Web</h1>
          <p>Development</p>
        </div>

        <div className={styles.card}>
          <p>Software-dev</p>
          <ul>
            <li>
              <Link href="/softwaredev">Web Apps</Link>
            </li>
            <li>
              <Link href="/mobileapps">Mobile Apps</Link>
            </li>
            <li>
              <Link href="/cloudsolutions">Cloud Solutions</Link>
            </li>
            <li>
              <Link href="/techstacks">Our Stacks</Link>
            </li>
            <li>
              <Link href="/ourprojects">Our Projects</Link>
            </li>
            <li>
              <Link href="/">Articles</Link>
            </li>
          </ul>
        </div>
        <div className={styles.card}>
          <div>
            <p>Print & Branding</p>
            <ul>
              <li>
                <Link href="/printandbranding">Graphics Design</Link>
              </li>
              <li>
                <Link href="/">Info Graphics</Link>
              </li>
              <li>
                <Link href="/">Digital Printing</Link>
              </li>
              <li>
                <Link href="/">Off-Set Printing</Link>
              </li>
              <li>
                <Link href="/">Large Format Printing</Link>
              </li>
              <li>
                <Link href="/">Textile Printing</Link>
              </li>
              <li>
                <Link href="/">Promotional Items Branding</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.card}>
          <p>Graphics</p>
          <h1>Design</h1>
          <p>Info-Graphics</p>
        </div>
      </div>
      <div className={styles.copyright}>
        <div className={styles.containerCopyright}>
          <p>
            {" "}
            Copyright : &copy; {new Date().getFullYear()} Aspire Graphics Ltd
          </p>
        </div>

        <div className={styles.containerCopyright}>
          <ul>
            <li>
              <Link href="/about">About Us</Link>
            </li>
            <li>
              <Link href="/">Privacy & Cookies</Link>
            </li>
            <li>
              <Link href="/">Help</Link>{" "}
            </li>
            <li>
              <Link href="/">Feedback</Link>{" "}
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Footer;
