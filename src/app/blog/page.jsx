import PostCard from "@/components/postCard/postCard";
import styles from "./blog.module.css";

const BlogPage = () => {
  return (
    <div classNam={styles.container}>
      <div className={styles.post}>
        <PostCard />
      </div>
    </div>
  );
};

export default BlogPage;
