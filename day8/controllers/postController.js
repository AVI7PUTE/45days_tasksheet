const Post = require('../models/Post');

exports.createPost = async (req, res) => {
  try {
    const { title, content, userId } = req.body;
    const post = new Post({ title, content, user: userId });
    await post.save();
    res.status(201).json(post);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getPosts = async (req, res) => {
  try {
    const posts = await Post.find().populate('user');
    res.json(posts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};