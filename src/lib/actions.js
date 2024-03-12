"use server";

import { signOut } from "./auth";

export const addpost = async () => {
  console.log("hello");
};

//logout action
export const handelLogout = async () => {
  await signOut();
};
