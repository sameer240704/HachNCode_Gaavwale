import express from "express";
import {
  getFeedPosts,
  getUserPosts,
  createPost,
} from "../controllers/posts.controllers.js";
import { verifyToken } from "../middleware/auth.middleware.js";

const router = express.Router();

//READ
router.get("/getPosts", verifyToken, getFeedPosts);
router.get("/:userId/getPosts", verifyToken, getUserPosts);

//CREATE
router.post("/createPost", verifyToken, createPost);

export default router;
