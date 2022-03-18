import { useEffect, useState } from "react";
import Navlist from "../ListNavbar.js/listNavbar";
import Link from "next/link";
import styles from "../Navbar/navbar.module.scss";
import Image from "next/image";
import dynamic from "next/dynamic";
import gsap from "gsap";

const DynamicMenu = dynamic(() => import("../NavbarOverlay"));

const Navbar = () => {
  useEffect(() => {
    if (window.innerWidth > 1023) {
      gsap.from("#NavAnimate", {
        duration: 1,
        opacity: 0,
        yPercent: -1000,
        ease: "power1",
      });
    }
  }, []);

  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = (e) => {
    e.preventDefault;
    setShowMenu(!showMenu);
  };

  return (
    <nav id="NavAnimate" className={styles.navContainer}>
      <div className={styles.navstyles}>
        <div className={styles.NavItems}>
          <div className={styles.logoContainer}>
            <Link href="/">
              <a>
                <Image
                  src={"/Logo.svg"}
                  alt="Tribeca-logo"
                  layout="fill"
                  objectFit="contain"
                  className={styles.logo}
                />
              </a>
            </Link>
          </div>
          {!showMenu ? (
            <button onClick={toggleMenu} className={styles.btn}>
              <Image
                src={"/button.svg"}
                alt="Open-Button"
                layout="fill"
                objectFit="contain"
                priority={true}
                className={styles.BtnImage}
              />
            </button>
          ) : (
            <button onClick={toggleMenu} className={styles.btn}>
              <Image
                src={"/close.svg"}
                alt="Open-Button"
                layout="fill"
                objectFit="contain"
                priority={true}
                className={styles.BtnImage}
              />
            </button>
          )}
          <div className={styles.fullwidth}>
            <Navlist />
          </div>
        </div>
      </div>
      {showMenu && <DynamicMenu />}
    </nav>
  );
};

export default Navbar;
