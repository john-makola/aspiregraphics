import styles from "../styles/print.module.css";
import Meta from "../components/Meta";
import Image from "next/image";
import { useRouter } from "next/router";
import featured from "../images/graphicsdesign.png";
import featured1 from "../images/businesscards.png";
import featured2 from "../images/ecards.png";
import featured3 from "../images/flyersbrochures.png";
import featured4 from "../images/brochuredesign.png";
import featured5 from "../images/infographics.png";
import featured6 from "../images/digitalprinting.png";
import featured7 from "../images/offsetprinting.png";
import featured8 from "../images/largeformatprinting.png";
import featured9 from "../images/textilebranding.png";
import FaqQuestionsPrinters from "@/components/faqQuestionsprinters";

const PrintAndBranding = () => {
  const router = useRouter();
  const HandleContact = () => {
    router.push("/contact");
  };

  return (
    <>
      <Meta
        title="Graphics Design, Printing, Branding & Promotional Items"
        keywords="Nairobi, Kenya , Staff ID Cards, Digital Printing, Tshirt Branding, Tshirt Printing, Mug Printing, Banner Printing, Sticker Printing, Logos, Mock-Up Designs, Creative Designs, Hoodie Printing, Fleece Blankets"
        description="Get Business Cards Designs and Printing, 2023 Diaries, Calendars, Reflective Stickers , Window Graphics, Heat Press, Vynil Cutting, Velo Binding, Key Holders, Promotional Items, Tshirts, Hoodies, Caps, Water Bottles, Thermo-Flasks, Travel Mugs, Eulogy Programs "
      />
      <div className={styles.container}>
        <h1 style={{ textAlign: "center" }}>
          Looking to Freshen-up your business : Digital Media Adverts Designs On
          Facebook, Instagram, whatsApp or Online , Corporate Stationery
          Business Cards & Publications
        </h1>
        <p style={{ padding: "20px" }}>
          Successful business marketing campaigns are driven by a highly
          creative designs. Superp graphics can help businesses to reach high
          visibility Through Viral AD Marketing which results to increased
          sales, Professional Image and Brand Identity. Attractive visuals,
          effective communication of ideas, higher visibility and enhanced
          credibility push traffic to your brand.
        </p>
        <div className={styles.grid}>
          <div style={{ textAlign: "center" }}>
            <div className={styles.featuredGraphic}>
              <div className={styles.imageContainer}>
                <Image
                  src={featured}
                  fill
                  className={styles.image}
                  alt="Logo Design"
                />
              </div>
            </div>
            <div className={styles.content}>
              <div id={styles.paraStyle1}>
                <p>
                  Logos help in the creation of a brand identity for a company
                  or business because the primary uses of logos are to inspire
                  trust, recognition and admiration for a business or product. A
                  logo must be simple, memorable, timeless, appropriate and
                  versatile, but at the same time conjure up the feeling you
                  want your target audience to associate with your business.
                  Successful businesses understand the importance of logos in
                  marketing products, goods and services.
                </p>
                <button
                  onClick={HandleContact}
                  className={styles.button}
                  style={{ float: "right" }}
                >
                  Place Order &#187;
                </button>
              </div>
            </div>
          </div>
          <div style={{ textAlign: "center" }}>
            <div className={styles.featuredGraphic}>
              <div className={styles.imageContainer}>
                <Image
                  src={featured1}
                  fill
                  className={styles.image}
                  alt="Business Cards"
                />
              </div>
            </div>
            <div className={styles.content}>
              <div id={styles.paraStyle2}>
                <p>
                  Logos help in the creation of a brand identity for a company
                  or business because the primary uses of logos are to inspire
                  trust, recognition and admiration for a business or product. A
                  logo must be simple, memorable, timeless, appropriate and
                  versatile, but at the same time conjure up the feeling you
                  want your target audience to associate with your business.
                  Successful businesses understand the importance of logos in
                  marketing products, goods and services.
                </p>
                <button
                  onClick={HandleContact}
                  className={styles.button}
                  style={{ float: "right" }}
                >
                  Place Order &#187;
                </button>
              </div>
            </div>
          </div>
          <div style={{ textAlign: "center" }}>
            <div className={styles.featuredGraphic}>
              <div className={styles.imageContainer}>
                <Image
                  src={featured2}
                  fill
                  className={styles.image}
                  alt="eCards"
                />
              </div>
            </div>
            <div className={styles.content}>
              <div id={styles.paraStyle2}>
                <p>
                  e-Cards or Electronic cards can be used for promoting personal
                  and business events. They have a wider reach than traditional
                  cards since they can be distributed on social media forums for
                  like WhatsApps , Facebook and Instagram.
                </p>
                <button
                  onClick={HandleContact}
                  className={styles.button}
                  style={{ float: "right" }}
                >
                  Place Order &#187;
                </button>
              </div>
            </div>
          </div>
          <div style={{ textAlign: "center" }}>
            <div className={styles.featuredGraphic}>
              <div className={styles.imageContainer}>
                <Image
                  src={featured3}
                  fill
                  className={styles.image}
                  alt="Flyer Design"
                />
              </div>
            </div>
            <div className={styles.content}>
              <div id={styles.paraStyle1}>
                <p>
                  A flyer is a small sheet of paper containing printed text that
                  advertises an event, product, or service. A flyer is generally
                  printed on the A5, A6, Envelope, paper size to keep its cost
                  low, though flyers can be created in any size that is easy to
                  handle. Flyers can be Printed:
                </p>
                <ol>
                  <li style={{ lineHeight: "25px" }}>
                    Single Sided or Double Sided
                  </li>
                  <li style={{ lineHeight: "25px" }}>130-150-175-200(gsm) </li>
                  <li style={{ lineHeight: "25px" }}>Gloss or Matte Paper</li>
                </ol>
                <button
                  onClick={HandleContact}
                  className={styles.button}
                  style={{ float: "right" }}
                >
                  Place Order &#187;
                </button>
              </div>
            </div>
          </div>
          <div style={{ textAlign: "center" }}>
            <div className={styles.featuredGraphic}>
              <div className={styles.imageContainer}>
                <Image
                  src={featured4}
                  fill
                  className={styles.image}
                  alt="Brochure Design"
                />
              </div>
            </div>
            <div className={styles.content}>
              <div id={styles.paraStyle1}>
                <p>
                  A brochure(pamphlets) contains folds that create multiple
                  panels or pages of information, such as a tri-fold or the more
                  creative double gate fold. Brochures can be created from
                  multiple sheets bound together. Brochures are mostly Printed:
                </p>
                <ol>
                  <li style={{ lineHeight: "25px" }}>Double Sided</li>
                  <li style={{ lineHeight: "25px" }}>130-150-175-200(gsm) </li>
                  <li style={{ lineHeight: "25px" }}>Gloss or Matte Paper</li>
                </ol>
                <button
                  onClick={HandleContact}
                  className={styles.button}
                  style={{ float: "right" }}
                >
                  Place Order &#187;
                </button>
              </div>
            </div>
          </div>
          <div style={{ textAlign: "center" }}>
            <div className={styles.featuredGraphic}>
              <div className={styles.imageContainer}>
                <Image
                  src={featured5}
                  fill
                  className={styles.image}
                  alt="Info Graphics"
                />
              </div>
            </div>
            <div className={styles.content}>
              <div id={styles.paraStyle2}>
                <p>
                  Infographics are graphic visual representations of
                  information, data, or knowledge intended to present
                  information quickly and clearly. They consist of a collection
                  of imagery, data visualizations like pie charts and bar
                  graphs, and minimal text that gives an easy-to-understand
                  overview of a topic.
                </p>
                <button
                  onClick={HandleContact}
                  className={styles.button}
                  style={{ float: "right" }}
                >
                  Place Order &#187;
                </button>
              </div>
            </div>
          </div>
          <div style={{ textAlign: "center" }}>
            <div className={styles.featuredGraphic}>
              <div className={styles.imageContainer}>
                <Image
                  src={featured6}
                  fill
                  className={styles.image}
                  alt="Digital Printing"
                />
              </div>
            </div>
            <div className={styles.content}>
              <div id={styles.paraStyle2}>
                <p>
                  With digital printing, we provide fast high quality from
                  Normal Photocopy Paper(80gs)to thick(350gsm) paper prints from
                  Digital Laser Printers. Its Ideal for small-run jobs of copies
                  less than 500 prints. Jobs range from Envelopes,
                  A6-A5-A4-B4-B5-A3 Paper Sizes for Posters, Stickers,
                  Brochures, Catalogues, Flyers Business Cards Calenders,
                  Training Manuals, & Bulk Photocopying etc.
                </p>
                <button
                  onClick={HandleContact}
                  className={styles.button}
                  style={{ float: "right" }}
                >
                  Place Order &#187;
                </button>
              </div>
            </div>
          </div>
          <div style={{ textAlign: "center" }}>
            <div className={styles.featuredGraphic}>
              <div className={styles.imageContainer}>
                <Image
                  src={featured7}
                  fill
                  className={styles.image}
                  alt="Off-Set Printing"
                />
              </div>
            </div>
            <div className={styles.content}>
              <div id={styles.paraStyle1}>
                <p>
                  Offset printing is the popular traditional printing technique
                  where the inked image is transferred from a plate to a rubber
                  blanket and then to the printing surface. Its Ideal for bulk
                  print copies from 1000 and above. Jobs range from A1, A2, A3
                  Paper Sizes for Posters, Stickers, Brochures, Catalogues,
                  Flyers Business Cards Calenders, Books, Manuals etc.
                </p>

                <button
                  onClick={HandleContact}
                  className={styles.button}
                  style={{ float: "right" }}
                >
                  Place Order &#187;
                </button>
              </div>
            </div>
          </div>
          <div style={{ textAlign: "center" }}>
            <div className={styles.featuredGraphic}>
              <div className={styles.imageContainer}>
                <Image
                  src={featured8}
                  fill
                  className={styles.image}
                  alt="Large Format Printing"
                />
              </div>
            </div>
            <div className={styles.content}>
              <div id={styles.paraStyle1}>
                <p>
                  Large format Printing covers printing large sized materials
                  ranging from Banners , Stickers (Normal and Reflective),
                  Windows Graphics Roll-Up Banners, Tear-Drops, Photos, Boards,
                  Banner Stands, Car Branding, Pop Displays, Poster Printing,
                  Trade Show Displays, Road signage, and Vinyl Lettering etc.
                  Ideal for both Outdoor and Indoor branding.
                </p>
                <button
                  onClick={HandleContact}
                  className={styles.button}
                  style={{ float: "right" }}
                >
                  Place Order &#187;
                </button>
              </div>
            </div>
          </div>
          <div style={{ textAlign: "center" }}>
            <div className={styles.featuredGraphic}>
              <div className={styles.imageContainer}>
                <Image
                  src={featured9}
                  fill
                  className={styles.image}
                  alt="Textile Printing"
                />
              </div>
            </div>
            <div className={styles.content}>
              <div id={styles.paraStyle2}>
                <p>
                  Textile printing & Branding is the process of applying colour
                  to fabric in definite patterns or designs. We brand an
                  assortment of textiles including : T-shirts , Polo-Shirts,
                  Hoodies , Jumpers, Denims, Bandana’s , Scarfs, School
                  Uniforms, Caps etc. We offer: Embroidery, No-Cut, Vynil and
                  Screen Printing
                </p>

                <button
                  onClick={HandleContact}
                  className={styles.button}
                  style={{ float: "right" }}
                >
                  Place Order &#187;
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PrintAndBranding;
