import gsap from "gsap";
import Link from "next/link";
import { useEffect } from "react";
import styles from "../ListNavbar.js/listNavbar.module.scss";

const Navlist = () => {
  useEffect(() => {
    if (window.innerWidth > 1023) {
      const timeline = gsap.timeline({ defaults: { duration: 1 } });
      timeline.from("#ItemAnimate", {
        opacity: 0,
        delay: 1,
        stagger: 0.2,
      });
    }
  }, []);
  return (
    <ul className={styles.FullMenuItem}>
      <Link href="/">
        <a>
          <li id="ItemAnimate" className={styles.FullMenuItems}>
            Home
          </li>
        </a>
      </Link>
      <Link href="./WhoWeAre">
        <a>
          <li id="ItemAnimate" className={styles.FullMenuItems}>
            Who We Are
          </li>
        </a>
      </Link>
      <Link href="/">
        <a>
          <li id="ItemAnimate" className={styles.FullMenuItems}>
            What We Do
          </li>
        </a>
      </Link>
      <Link href="/">
        <a>
          <li id="ItemAnimate" className={styles.FullMenuItems}>
            Clients
          </li>
        </a>
      </Link>
      <Link href="/">
        <a>
          <li id="ItemAnimate" className={styles.FullMenuItems}>
            Awards
          </li>
        </a>
      </Link>
      <Link href="/">
        <a>
          <li id="ItemAnimate" className={styles.FullMenuItems}>
            News
          </li>
        </a>
      </Link>
      <Link href="/">
        <a>
          <li id="ItemAnimate" className={styles.FullMenuItems}>
            Join Us
          </li>
        </a>
      </Link>
      <Link href="/">
        <a>
          <li id="ItemAnimate" className={styles.FullMenuItems}>
            Contact Us
          </li>
        </a>
      </Link>
    </ul>
  );
};

export default Navlist;
