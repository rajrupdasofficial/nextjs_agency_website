import { connectToDb } from "@/lib/utils";
import styles from "./register.module.css";
import { User } from "@/lib/models";
import bcrypt from "bcrypt";
const RegisterPage = () => {
  const register = async (formData) => {
    "use server";
    const { username, email, password, img, passwordRepeat } =
      Object.fromEntries(formData);

    if (password !== passwordRepeat) {
      return { error: "Passwords do not match" };
    }

    try {
      connectToDb();

      const user = await User.findOne({ username });

      if (user) {
        return { error: "Username already exists" };
      }

      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);

      const newUser = new User({
        username,
        email,
        password: hashedPassword,
        img,
      });

      await newUser.save();
      console.log("saved to db");

      return { success: true };
    } catch (err) {
      console.log(err);
      return { error: "Something went wrong!" };
    }
  };
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <form className={styles.form} action={register}>
          <input type="text" placeholder="username" name="username" />
          <input type="email" placeholder="email" name="email" />
          <input type="password" placeholder="password" name="password" />
          <input
            type="password"
            placeholder="password again"
            name="passwordRepeat"
          />
          <button>Signup</button>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
