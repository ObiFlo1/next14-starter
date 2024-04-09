import styles from "./postUser.module.css";

async function getUser(userid) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userid}`
  );
  return res.json();
}

async function PostUser({ userid }) {
  const user = await getUser(userid);
  return (
    <div className={styles.container}>
      <span className={styles.title}>Author</span>
      <span className={styles.username}>{user.username}</span>
    </div>
  );
}

export default PostUser;
