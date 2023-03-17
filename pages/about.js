import styles from "../styles/about.module.css";
import Image from "next/image";

import featured from "../images/about_featured.jpg";
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
        <h2>Background</h2>
        <p>
          Aspire Graphics Ltd(ASP) is a Computing Technology Service Provider.
          We build and support{" "}
          <span style={{ color: "#3AAFA9", fontWeight: "bold" }}>
            Software solutions and Graphics Designs Products
          </span>{" "}
          for different markets.
        </p>
        <p>
          Established in 2015, ASP is based in Kenya we provide solutions to
          over 50 clients spread in didfferent parts of the World. Our Solutions
          are authentic and market fit for our diverse customer needs . With a
          commitment to provide reliable digital services timely and remotely ,
          ASP has invested in teams of Business Development Managers,
          Development Operators (DevOps),Software Development, UI and UX Design
          tools and Print Press Production
        </p>
        <p>
          {" "}
          We serve a wide range of business clients from: Individuals, Small &
          Medium based business, Corporate, Government and Non Governmental
          Institutions.
        </p>
        <h2>Software Development Solutions</h2>
        <p>
          We help our clients build, design, develop, test and Maintain Software
          Solutions for different markets including:
        </p>
        <ul>
          <li>
            <span>Software Development </span>
            <p>
              Our Range of Products includes: MIS - Web Apps, Mobile Apps, CRM
              Products, Websites, Desktop Applications, APIs.
            </p>
          </li>
          <li>
            <span>Deploying Solutions </span>
            <p>
              We help our clients with Apps deployment and Intergration whether
              for Testing, Beta-versions or Production on the common Cloud
              Hosting Computing providers: Azure , AWS, Cloud
            </p>
          </li>
        </ul>

        <h2>Graphics Design & Print Solutions</h2>
        <p>
          We recognize that it is not just good{" "}
          <span style={{ color: "#3AAFA9", fontWeight: "bold" }}>
            {" "}
            (User Experirence) UX/ (User Interface) UI
          </span>{" "}
          designs that are key, good execution is vital in driving effective
          business strategies, hence creating Brand differentiation and customer
          satisfaction.
          <ul style={{ background: "#D2D3D5" }}>
            <li>
              <span>Graphics Design</span>{" "}
              <p>
                Products Mock-up, Logos, Info Graphics, Creative Designs, Web
                and Mobile App Designs
              </p>
            </li>
            <li>
              <span>Print Solutions</span>{" "}
              <p>Digital Printing, Off-Set Printing, Large Format- Printing,</p>
            </li>
          </ul>
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
