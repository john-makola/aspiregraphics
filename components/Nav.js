import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import Logo from "../images/aspirelogo.png";
import Styles from "../styles/Nav.module.css";

import { FaBars } from "react-icons/fa";

function Nav() {
  const router = useRouter();

  const [showLinks, setShowLinks] = useState(false);

  const currentRoute = router.pathname;

  useEffect(() => {
    if (showLinks === true) {
      setTimeout(() => {
        setShowLinks(false);
      }, 3000);
    }
  }, [showLinks]);

  return (
    <div className={Styles.Navbar}>
      <div className={Styles.leftSide}>
        <button onClick={() => setShowLinks(!showLinks)}>
          <FaBars className={Styles.faBars} />
        </button>
        <div className={Styles.imageContainer}>
          <Image
            src={Logo}
            fill
            alt="Aspire Graphics Ltd"
            className={Styles.image}
          />
        </div>
        <div className={Styles.links} id={!showLinks ? "" : Styles.hidden}>
          <ul>
            <li>
              <Link
                href="/"
                className={
                  currentRoute === "/" ? Styles.active : Styles.nonActive
                }
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/softwaredev"
                className={
                  currentRoute === "/softwaredev"
                    ? Styles.active
                    : Styles.nonActive
                }
              >
                Software Dev
              </Link>
            </li>
            <li>
              <Link
                href="/printandbranding"
                className={
                  currentRoute === "/printandbranding"
                    ? Styles.active
                    : Styles.nonActive
                }
              >
                Print & Branding
              </Link>
            </li>
            <li>
              <Link
                href="/faq"
                className={
                  currentRoute === "/faq" ? Styles.active : Styles.nonActive
                }
              >
                FAQs
              </Link>
            </li>

            <li>
              <Link
                href="/contact"
                className={
                  currentRoute === "/contact" ? Styles.active : Styles.nonActive
                }
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className={Styles.rightSide}>Nav</div>
    </div>
  );
}

export default Nav;
