import Link from "next/link";
import Links from "./links/Links";
import styles from "./navbar.module.css";
function NavBar() {
  return (
    <div className={styles.container}>
      <Link href="/" className={styles.logo}>
        Logs
      </Link>
      <div>
        <Links />
      </div>
    </div>
  );
}

export default NavBar;
