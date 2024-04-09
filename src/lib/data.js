import mongoose, { connect } from "mongoose";
import User from "./models";
import Post from "./models";
import { connectToDb } from "./connectToDb";

//TEMPORY DATA
// const users = [
//   { id: 1, name: "john" },
//   { id: 2, name: "jane" },
// ];

// const post = [
//   { id: 1, title: "Post 1", body: "....", userId: 1 },
//   { id: 1, title: "Post 2", body: "....", userId: 2 },
//   { id: 1, title: "Post 3", body: "....", userId: 3 },
//   { id: 1, title: "Post 4", body: "....", userId: 4 },
//   { id: 1, title: "Post 5", body: "....", userId: 5 },
// ];

export const getPosts = async () => {
  try {
    connectToDb();
    const posts = await Post.find();
    return posts;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch post from db ig");
  }
};

export const getPost = async (slug) => {
  try {
    connectToDb();
    const posts = await Post.find(slug);
    return posts;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch postsss. ");
  }
};
export const getUser = async (id) => {
  try {
    connectToDb();
    const user = await User.findById(id);
    return user;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch user id ");
  }
};

export const getUsers = async () => {
  try {
    connectToDb();
    const usersAll = await User.find();
    return usersAll;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch all users");
  }
};
