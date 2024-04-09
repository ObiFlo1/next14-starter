import PostCard from "@/component/postCard/postcard";
import styles from "./blog.module.css";
import { getPosts } from "@/lib/data";
//    THIS HOW YOU WOULD FETCH DATA WITH AN API
// async function getData() {
//   const res = await fetch("https://jsonplaceholder.typicode.com/posts");
//   return res.json();
// }

async function BlogPage() {
  // params is a build in react thing ig.

  //  FETCH DATA WITH AN ONLINE APII
  // const posts = await getData();

  //  GET DATA WITHOUT AN ONLINE API. THIS IS FROM OWN LOCAL REPO
  const posts = await getPosts();

  return (
    <div className={styles.container}>
      {posts.map((post) => (
        <div className={styles.post} key={post.id}>
          <PostCard post={post} />
        </div>
      ))}
    </div>
  );
}

export default BlogPage;
