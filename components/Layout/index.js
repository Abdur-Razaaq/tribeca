import Navbar from "../Navbar";
import styles from "./Layout.module.scss";

const Layout = ({ children }) => {
  return (
    <div className={styles.content}>
      <Navbar />
      {children}
    </div>
  );
};

export default Layout;
