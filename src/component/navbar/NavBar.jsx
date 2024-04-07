import Links from "./links/Links";
import styles from "./navbar.module.css";
function NavBar() {
  return (
    <div className={styles.container}>
      <div>Logs</div>
      <div>
        <Links />
      </div>
    </div>
  );
}

export default NavBar;