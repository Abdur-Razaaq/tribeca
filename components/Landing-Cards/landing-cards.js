import Link from "next/link";
import { useEffect } from "react";
import gsap from "gsap";

import styles from "../Landing-Cards/landing-cards.module.scss";

const Cards = () => {
  useEffect(() => {
    if (window.innerWidth > 1023) {
      const timeline = gsap.timeline({ defaults: { duration: 1 } });
      timeline.from("#AnimateCards", {
        opacity: 0,
        ease: "power2.out",
        delay: 0.5,
        stagger: 0.5,
      });
    }
  }, []);

  return (
    <div className={styles.LinkCardContainer}>
      <div id="AnimateCards" className={styles.LinkCards1}>
        <Link href="/">
          <a>
            <h2 className={styles.LinkTitle}>What we do</h2>
          </a>
        </Link>
      </div>
      <div id="AnimateCards" className={styles.LinkCards2}>
        <Link href="/">
          <a>
            <h2 className={styles.LinkTitle}>Clients</h2>
          </a>
        </Link>
      </div>
      <div id="AnimateCards" className={styles.LinkCards3}>
        <Link href="/">
          <a>
            <h2 className={styles.LinkTitle}>Awards</h2>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Cards;
