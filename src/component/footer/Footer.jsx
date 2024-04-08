import styles from "./footer.module.css";
function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>Flo$Dev </div>
      <div className={styles.text}>
        Flo$ creatvie thoughts agency © All rights reserved
      </div>
    </div>
  );
}

export default Footer;
