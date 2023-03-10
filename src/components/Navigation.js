import { default as Link } from "next/link";
import styles from "./Navigation.module.css";
import { PopLink } from "./PopLink";

const linksLeft = [
  { href: "/", title: "Home" },
  { href: "Features", title: "Features" },
  { href: "Company", title: "Company" },
  { href: "About", title: "About" },
];

const linksRight = [
  { href: "Login", title: "Login" },
  { href: "Register", title: "Register" },
]

const Navigation = () => {
  return (
    <div className={styles.container}>
      <div className={styles.navLeft}>
        {linksLeft.map((link, i) => {
          return <Link key={i} href={link.href}>{link.title}</Link>;
        })}
      </div>
      <div className={styles.navRight}>
        {linksRight.map((link) => {
          return <Link href={link.href}>{link.title}</Link>;
        })}
      </div>
    </div>
  );
};

export default Navigation;
