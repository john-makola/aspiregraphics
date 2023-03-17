import Link from "next/link";
import Navstyles from "../styles/NavContactSocial.module.css";
import Image from "next/image";
import facebook from "../images/facebook.png";
import Instagram from "../images/Instagram.png";
import whatsapp from "../images/whatsapp.png";
import twitter from "../images/twitter.png";

const NavContacts = () => {
  return (
    <div className={Navstyles.grid}>
      <div className={Navstyles.navContacts}>
        <ul>
          <li>
            <Link href="https://wa.me/254722513085?text=I'm%20inquiring%20about%20Software Development,%20Branding,%20Printing">
              +254-722513085
            </Link>
            /
          </li>
          <li>
            <Link href=" https://wa.me/254722513085?text=I'm%20inquiring%20about%20Software Development,%20Branding,%20Printing">
              +254-721-447-666
            </Link>
          </li>
        </ul>
      </div>
      <div className={Navstyles.navSocial}>
        <ul>
          <li>
            <div className={Navstyles.imageContainer} title="Twitter">
              <Link href="https://twitter.com/aspiregraphics3">
                <Image
                  src={twitter}
                  fill
                  alt="Twitter"
                  className={Navstyles.image}
                />
              </Link>
            </div>
          </li>
          <li>
            <div className={Navstyles.imageContainer} title="facebook">
              <Link href="https://web.facebook.com/aspiregraphics">
                <Image
                  src={facebook}
                  fill
                  alt="Facebook"
                  className={Navstyles.image}
                />
              </Link>
            </div>
          </li>
          <li>
            <div className={Navstyles.imageContainer} title="Instagram">
              <Link href="https://www.instagram.com/brand.script/">
                <Image
                  src={Instagram}
                  fill
                  alt="Instagram"
                  className={Navstyles.image}
                />
              </Link>
            </div>
          </li>
          <li>
            <div className={Navstyles.imageContainer} title="WhatsApp">
              <Link href=" https://wa.me/254722513085?text=I'm%20inquiring%20about%20Software Development,%20Branding,%20Printing">
                <Image
                  src={whatsapp}
                  fill
                  alt="WhatsApp"
                  className={Navstyles.image}
                />
              </Link>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavContacts;
