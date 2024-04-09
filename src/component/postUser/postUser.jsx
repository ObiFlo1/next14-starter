import styles from "./postUser.module.css";
import { getUser } from "@/lib/data";

//   THIS IS HOW YOU WOULD FETCH DATA WITH AN API
// async function getUser(userid) {
//   const res = await fetch(
//     `https://jsonplaceholder.typicode.com/users/${userid}`,
//     { cache: "no-store" }
//   );
//   return res.json();
// }

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
