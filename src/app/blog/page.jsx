import PostCard from "@/component/postCard/postcard";
import styles from "./blog.module.css";

async function getData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  return res.json();
}

async function BlogPage() {
  // params is a build in react thing ig.

  const posts = await getData();

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
