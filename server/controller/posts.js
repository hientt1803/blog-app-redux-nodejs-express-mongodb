import { PostModel } from "../models/PostModel.js";

export const getPosts = async (req, res) => {
  try {
    const posts = await PostModel.find();

    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

export const createPost = async (req, res) => {
  try {
    const data = req.body;

    const post = new PostModel(data);
    await post.save();

    res.status(201).json(posts);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

export const updatePost = async (req, res) => {
  try {
    const data = req.body;

    const post = await PostModel.findOneAndUpdate({ _id: data._id }, data, {
      new: true,
    });

    res.status(200).json(post);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};
