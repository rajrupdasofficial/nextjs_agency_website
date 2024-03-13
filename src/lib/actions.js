"use server";

// import { signOut } from "./auth";
import { User } from "@/lib/models";
import bcrypt from "bcrypt";
import { connectToDb } from "@/lib/utils";
import { auth, signIn, signOut } from "@/lib/auth";

export const addpost = async () => {
  console.log("hello");
};

//register action
export const register = async (previousState, formData) => {
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
//login action
export const hadleGithubLogin = async () => {
  await signIn("github");
};
export const login = async (previousState, formData) => {
  const { username, password } = Object.fromEntries(formData);
  try {
    await signIn("credentials", { username, password });
  } catch (err) {
    if (err.message.includes("CredentialsSignin", "Wrong credentials")) {
      return { error: "Invalid username or password" };
    }
    return { error: "Something went wrong" };
  }
};
//logout action
export const handelLogout = async () => {
  await signOut();
};
