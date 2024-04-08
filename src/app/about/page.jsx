//NextJs replaces <img> tag with NextJS<Image/>
// you have to have a size
import Image from "next/image";
import styles from "./about.module.css";

function AboutPage() {
  return (
    <div className={styles.container}>
      <Image src="/about.png" alt="" width={500} height={500} />
    </div>
  );
}

export default AboutPage;
