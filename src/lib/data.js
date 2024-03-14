//TEMP DATA
// const users = [
//   { id: 1, name: "Jhon" },
//   { id: 2, name: "Denis" },
// ];
// const user = [
//   { id: 1, title: "Hello World1", body: "Demo body1", userId: 1 },
//   { id: 2, title: "Hello World2", body: "Demo body2", userId: 2 },
//   { id: 1, title: "Hello World3", body: "Demo body3", userId: 1 },
//   { id: 1, title: "Hello World4", body: "Demo body4", userId: 2 },
//   { id: 1, title: "Hello World5", body: "Demo body5", userId: 1 },
// ];

import { Post, User } from "./models";
import { connectToDb } from "./utils";
import { unstable_noStore as noStore } from "next/cache";
export const getPosts = async () => {
  try {
    connectToDb();
    const user = await Post.find();
    return user;
  } catch (err) {
    throw new Error("failed to fetch posts", err);
  }
};

export const getPost = async (slug) => {
  try {
    connectToDb();
    const post = await Post.findOne({ slug });
    return post;
  } catch (err) {
    throw new Error("failed to fetch post", err);
  }
};

export const getUser = async (id) => {
  noStore();
  try {
    connectToDb();
    const user = await User.findById(id);
    return user;
  } catch (err) {
    throw new Error("failed to fetch user", err);
  }
};

export const getUsers = async (id) => {
  try {
    connectToDb();
    const users = await User.find();
    return users;
  } catch (err) {
    throw new Error("failed to fetch users", err);
  }
};
