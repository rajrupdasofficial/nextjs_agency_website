import { Post } from "@/lib/models";
import { connectToDb } from "@/lib/utils";
import React from "react";

const ServerActionTestPage = () => {
  const savepost = async (formData) => {
    "use server";
    // const title = formData.get("title");
    // const desc = formData.get("desc");
    // const slug = formData.get("slug");
    // const userId = formData.get("userId");
    const { title, desc, slug, userId } = Object.fromEntries(formData);
    try {
      connectToDb();
      const newPost = new Post({
        title,
        desc,
        slug,
        userId,
      });
      await newPost.save();
      console.log("Saved to db");
      revalidatePath("/blog");
    } catch (err) {
      return { error: "something went wrong" };
    }
  };
  const deletePost = async (formData) => {
    "use server";
    const id = formData.get("postId");
    console.log(id);
    try {
      connectToDb();

      await Post.findByIdAndDelete(id);
      console.log("deleted post");
      revalidatePath("/blog");
    } catch (err) {
      return { error: "something went wrong" };
    }
  };
  return (
    <div>
      <form action={savepost}>
        <input type="text" placeholder="title" name="title" />
        <input type="text" placeholder="desc" name="desc" />
        <input type="text" placeholder="slug" name="slug" />
        <input type="text" placeholder="userId" name="userId" />
        <button>Create Post</button>
      </form>
      <form action={deletePost}>
        <input type="text" placeholder="postId" name="postId" />
        <button>Delete Post</button>
      </form>
    </div>
  );
};

export default ServerActionTestPage;
