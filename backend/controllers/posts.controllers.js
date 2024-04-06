import Post from "../models/post.models.js";
import User from "../models/user.models.js";

export const createPost = async (req, res) => {
  try {
    const { image, details, postedBy } = req.body;
    const user = await User.findById(userId);
    const newPost = await new Post({
      image,
      details,
      postedBy,
    });

    await newPost.save();

    const posts = await Post.find();

    res.status(201).json(posts);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const getFeedPosts = async (req, res) => {
  try {
    const post = await Post.find();
    res.status(200).json(post);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getUserPosts = async (req, res) => {
  try {
    const { postedBy } = req.params;
    const posts = await Post.find({ postedBy });
    res.status(200).json(posts);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
