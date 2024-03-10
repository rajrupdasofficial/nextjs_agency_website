import { getUser } from "@/lib/data";
import styles from "./postUser.module.css";

//FETCH DATA WITH an API
//fetch user data from server
// const getData = async (userId) => {
//   // console.log(slug);
//   const res = await fetch(
//     `https://jsonplaceholder.typicode.com/users/${userId}`,
//     { cache: "no-store" }
//   );
//   if (!res.ok) {
//     throw new Error("Something went wrong");
//   }
//   return res.json();
// };

const PostUser = async ({ userId }) => {
  //FETCH DATA WITH an API
  // const user = await getData(userId);
  //FETCH DATA WITHOUT an API
  const user = await getUser(userId);
  return (
    <div className={styles.container}>
      <span className={styles.title}>Author</span>
      <span className={styles.username}>{user.username}</span>
    </div>
  );
};

export default PostUser;
