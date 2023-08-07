import express from "express";
import { getPosts, createPost, updatePost } from "../controllers/Posts.js";

const router = express.Router();

router.get("/getList", getPosts);

router.post("/addPost", createPost);

router.post("/updatePost", updatePost);

export default getPosts;
