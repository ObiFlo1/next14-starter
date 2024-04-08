import Image from "next/image";
import styles from "./singlePost.module.css";

function SinglePostPage() {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="https://images.pexels.com/photos/20268801/pexels-photo-20268801/free-photo-of-black-and-white-photo-of-woman-holding-flowers.jpeg"
          alt=""
          fill
          className={styles.img}
        />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Dynamic Title</h1>
        <div className={styles.detail}>
          <Image
            className={styles.avatar}
            src="https://images.pexels.com/photos/20268801/pexels-photo-20268801/free-photo-of-black-and-white-photo-of-woman-holding-flowers.jpeg"
            alt=""
            width={50}
            height={50}
          />
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Author</span>
            <span className={styles.detailVlaue}>dynamic Name</span>
          </div>
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailVlaue}>dynamic date 01.03.2024</span>
          </div>
        </div>
        <div className={styles.content}>dynamic sentence</div>
      </div>
    </div>
  );
}

export default SinglePostPage;
