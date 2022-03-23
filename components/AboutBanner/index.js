import styles from "./AboutBanner.module.scss";
import Image from "next/image";
import { useEffect, useState } from "react";

const AboutBanner = () => {
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
  return (
    <section className={styles.bannerContainer}>
      {windowWidth < 1023 ? (
        <>
          <Image
            src="/who-we-are.webp"
            alt="background-image"
            layout="fill"
            objectFit="cover"
            quality={100}
            priority="true"
            className={styles.aboutImage}
          />
        </>
      ) : (
        <>
          <Image
            src="/who-we-are-desktop.webp"
            alt="background-image"
            layout="fill"
            objectFit="cover"
            quality={100}
            className={styles.aboutImage}
          />
        </>
      )}
      <div className={styles.bannerContent}>
        <h1 className={styles.AboutHeading}>
          <span className={styles.blue}>Who</span>
          <br />
          We Are
        </h1>
        <div className={styles.AboutBannerText}>
          <p className={styles.whiteText}>
            Tribeca Public Relations is an award-winning, independent, Level 1
            B-BBEE accredited PR agency based in Johannesburg.
          </p>
          <p className={styles.blueText}>
            We are a people-first agency invested in our consultants&apos;
            work/life balance. Our emphasis on employee well-being directly
            contributes to lasting, happy client relationships.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutBanner;
