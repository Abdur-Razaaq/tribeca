import Link from "next/link";
import styles from "../NavbarOverlay/NavbarOverlay.module.scss";

const Menu = () => {
  return (
    <div className={styles.menu}>
      <ul className={styles.MenuItem}>
        <Link href="/">
          <a>
            <li className={styles.MenuItems}>Home</li>
          </a>
        </Link>
        <Link href="./WhoWeAre">
          <a>
            <li className={styles.MenuItems}>Who We Are</li>
          </a>
        </Link>
        <Link href="/">
          <a>
            <li className={styles.MenuItems}>What We Do</li>
          </a>
        </Link>
        <Link href="/">
          <a>
            <li className={styles.MenuItems}>Clients</li>
          </a>
        </Link>
        <Link href="/">
          <a>
            <li className={styles.MenuItems}>Awards</li>
          </a>
        </Link>
        <Link href="/">
          <a>
            <li className={styles.MenuItems}>News</li>
          </a>
        </Link>
        <Link href="/">
          <a>
            <li className={styles.MenuItems}>Join Us</li>
          </a>
        </Link>
        <Link href="/">
          <a>
            <li className={styles.MenuItems}>Contact Us</li>
          </a>
        </Link>
      </ul>
    </div>
  );
};

export default Menu;
