import Image from "next/image";
import styles from "./about.module.css";
export const metadata = {
  title: "About Page",
  description:
    "We are highly skilled engineers | thanks for visiting out website",
};
const AboutPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h2 className={styles.subtitle}>About Agency</h2>
        <h1 className={styles.title}>
          We create digital ideas that are bigger, bolder,braver and better
        </h1>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
          consectetur voluptatum voluptates quod eum eaque iste iure, doloremque
          officia laboriosam iusto! Doloribus quidem, velit, tenetur possimus
          ducimus excepturi dolore officiis, mollitia cupiditate fugit ab quia
          blanditiis iusto! Itaque laboriosam, atque consequatur, corrupti quod
          aliquam delectus tempore necessitatibus recusandae eos velit?
        </p>
        <div className={styles.boxes}>
          <div className={styles.box}>
            <h1>10 K+</h1>
            <p>Year of experience</p>
          </div>
          <div className={styles.box}>
            <h1>10 K+</h1>
            <p>Year of experience</p>
          </div>
          <div className={styles.box}>
            <h1>10 K+</h1>
            <p>Year of experience</p>
          </div>
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image src="/about.png" alt="about" fill className={styles.img} />
      </div>
    </div>
  );
};

export default AboutPage;
