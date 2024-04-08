import Image from "next/image";
import styles from "./postCard.module.css";
import Link from "next/link";

function PostCard() {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.imgContainer}>
          <Image
            src="https://images.pexels.com/photos/20268801/pexels-photo-20268801/free-photo-of-black-and-white-photo-of-woman-holding-flowers.jpeg"
            alt=""
            fill
            className={styles.img}
          />
        </div>
        <span className={styles.date}>04.08.2024</span>
      </div>
      <div className={styles.bottom}>
        <h1 className={styles.title}> </h1>
        <p className={styles.desc}>
          {" "}
          In the image, a radiant young woman captivates with her stunning
          features and graceful demeanor. Her eyes sparkle with warmth and
          depth, drawing viewers into a world of enchantment. The gentle curve
          of her smile exudes confidence and allure, while her flowing hair
          frames her face like a halo of sunlight. Every detail in the image
          harmonizes to portray a vision of timeless beauty and elegance.
        </p>
        <Link className={styles.link} href="/blog/post">
          READ MORE
        </Link>
      </div>
    </div>
  );
}

export default PostCard;
