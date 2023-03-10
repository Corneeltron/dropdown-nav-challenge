import { default as Link } from "next/link";
import styles from "./Navigation.module.css";
import { motion } from "framer-motion";
import {PopLink} from "./PopLink";



const Navigation = () => {
  return (
    <div className={styles.container}>
      <div className={styles.navLeft}>
        <PopLink href="/" title="Pop" />
        <PopLink href="/Features" title="Features" />
        <PopLink href="/Company" title="Company" />
        <PopLink href="/About" title="About" />
      </div>
      <div className={styles.navRight}>
        <Link href="/Login">Login</Link>
        <Link href="/Register">Register</Link>
      </div>
    </div>
  );
};

export default Navigation;
