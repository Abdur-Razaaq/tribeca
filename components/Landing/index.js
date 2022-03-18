import gsap from "gsap";
import Link from "next/link";
import { useEffect } from "react";
import styles from "../Landing/landing.module.scss";
import Image from "next/image";
import useWindowDimensions from "../../utlls/useWindowWidth";
import { useState } from "react";

const Landing = () => {
  const [windowWidth, setWindowWidth] = useState(undefined);
  const mobileView = windowWidth > 1023;
  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, [mobileView]);
  useEffect(() => {
    if (window.innerWidth > 1023) {
      const timeline = gsap.timeline({ defaults: { duration: 0.5 } });
      timeline
        .from("#heading-Maskup", {
          opacity: 0,
          yPercent: 100,
          ease: "Power1.out",
          stagger: 0.3,
        })
        .from("#mask-up", {
          opacity: 0,
          yPercent: 200,
          ease: "power1.out",
          stagger: 0.5,
        })
        .from("#fade-in", {
          opacity: 0,
          ease: "power1.out",
        });
    }
  }, []);
  const { width } = useWindowDimensions();
  return (
    <section className={styles.landing}>
      <div className={styles.LandingContainer}>
        {windowWidth < 786 ? (
          <>
            <Image
              src="/home-page-1920.webp"
              alt="background-image"
              layout="fill"
              objectFit="cover"
              quality={100}
              priority="true"
              className={styles.landingImage}
            />
          </>
        ) : (
          <>
            <Image
              src="/home-page-1920_(desktop).webp"
              alt="background-image"
              layout="fill"
              objectFit="cover"
              quality={100}
              className={styles.landingImage}
            />
          </>
        )}
        <div className={styles.headingContainer}>
          <div className={styles.theMask}>
            <h1 id="heading-Maskup" className={styles.MainHeading}>
              <span className={styles.blue}>HELLO,</span>
            </h1>
          </div>
          <div className={styles.theMask}>
            <h1 id="heading-Maskup" className={styles.MainHeading}>
              <span className={styles.blue}>WE</span>
            </h1>
          </div>
          <div className={styles.theMask}>
            <h1 id="heading-Maskup" className={styles.MainHeading}>
              <span className={styles.blue}>ARE</span>
            </h1>
          </div>
          <br />

          <div className={styles.whiteOne}>
            <div className={styles.theMask}>
              <h1 id="heading-Maskup" className={styles.MainHeading}>
                <span>TRIBECA </span>
              </h1>
            </div>
            <div className={styles.theMask}>
              <h1 id="heading-Maskup" className={styles.MainHeading}>
                PUBLIC
              </h1>
            </div>
            <br />
            <div className={styles.theMask}>
              <h1 id="heading-Maskup" className={styles.MainHeading}>
                RELATIONS
              </h1>
            </div>
          </div>
        </div>

        <div className={styles.info}>
          <span className={styles.pText}>
            <p className={styles.infoText} id="mask-up">
              Tribeca Public Relations is an award-winning, independent, Level 1
              B-BBEE accredited South African PR agency. We help our clients
              talk with the people important to their business.
            </p>
          </span>
          <span className={styles.mask}>
            <button className={styles.infoButton} id="fade-in">
              <Link href="/">
                <a>covid-19 website</a>
              </Link>
            </button>
          </span>
        </div>
      </div>
    </section>
  );
};

export default Landing;
