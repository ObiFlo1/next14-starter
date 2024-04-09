import Image from "next/image";
import styles from "./singlePost.module.css";
import PostUser from "@/component/postUser/postUser";

// theres some parameter throws and catches here . gotta follow the white rabbit when it comes to parameter here. ill try to comment which is the first paremeter.
// 1st. const {slug} = params. 2. gets passed in the invoked getData. 3. slug gets passed in as a parameter in the initialation function getdata. 4. gets used as a parameter

async function getData(slug) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`);
  return res.json();
}

// async function getUser() {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/${users}`);
//   return res.json();
// }
// const users = await getUser();

async function SinglePostPage({ params }) {
  // params is a build in react thing ig.
  const { slug } = params;
  const post = await getData(slug);

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
        <h1 className={styles.title}>{post.title}</h1>
        <div className={styles.detail}>
          <Image
            className={styles.avatar}
            src="https://images.pexels.com/photos/20268801/pexels-photo-20268801/free-photo-of-black-and-white-photo-of-woman-holding-flowers.jpeg"
            alt=""
            width={50}
            height={50}
          />
          <PostUser userid={post.userId} />
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailVlaue}>dynamic date 01.03.2024</span>
          </div>
        </div>
        <div className={styles.content}>{post.body}</div>
      </div>
    </div>
  );
}

export default SinglePostPage;
