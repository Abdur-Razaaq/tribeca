import Image from "next/image";
import styles from "./AboutContent.module.scss";
import { useEffect, useState } from "react";

const AboutContent = () => {
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
    <section className={styles.aboutContentInfo}>
      <div className={styles.ImageContainer}>
        {windowWidth < 768 ? (
          <>
            <Image
              src="/who-we-are-left.webp"
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
              src="/who-we-are-left-desktop.webp"
              alt="background-image"
              layout="fill"
              objectFit="cover"
              quality={100}
              priority="true"
              className={styles.aboutImage}
            />
          </>
        )}
      </div>
      <div className={styles.textScroll}>
        <p className={styles.scrollTextContent}>
          Our Level 1 B-BBEE status reflects an approach to transformation and
          empowerment that embodies our values, our ethos and how we believe
          that contribution is more important than compliance.
        </p>
        <p className={styles.scrollTextContent}>
          Our purpose is to help our clients talk with the people important to
          their business, because we truly believe that public relations is that
          simple. We create business-led PR strategies, and we deliver results
          through carefully planned tactics.
        </p>
        <p className={styles.scrollTextContent}>
          Tribeca&apos;s approach to public relations, our clients and our
          employees really works, and we can prove it. We have proudly accepted
          industry awards for excellence in PR services every year that we have
          been in business - including 12 Gold PRISM awards.
        </p>
      </div>
    </section>
  );
};

export default AboutContent;
