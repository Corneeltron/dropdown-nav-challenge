import { default as Link } from "next/link";
import styles from "./Navigation.module.css";

const Navigation = () => {
  return (
    <div className={styles.container}>
      <div className={styles.navLeft}>
        <Link href="/">snap</Link>
        <Link href="/Features">Features</Link>
        <Link href="/Company">Company</Link>
        <Link href="/Careers">Careers</Link>
        <Link href="About">About</Link>
      </div>
      <div className={styles.navRight}>
        <Link href="/Login">Login</Link>
        <Link href="/Register">Register</Link>
      </div>
    </div>
  );
}

export default Navigation;