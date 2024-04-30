const validator = require("fastest-validator");

const models = require("../models");

// Insert the post controller
const insertController = async (req, res) => {
  try {
    const post = {
      title: req.body.title,
      content: req.body.content,
      imageUrl: req.body.image_url,
      categoryId: req.body.category_id,
      userId: 1,
    };

    // Validation schema

    const schema = {
      title: { type: "string", optional: false, max: "100", min:"5" },
      content: { type: "string", optional: false, max: "500", min:"10" },
      categoryId: { type: "number", optional: true },
    };

    const valid = new validator();

    const validationResponse = valid.validate(post, schema);

    if (validationResponse !== true) {
      return res.status(400).json({
        message: "Validation failed!",
        error: validationResponse,
      });
    }

    
    const newPost = await models.Post.create(post);
    if (newPost) {
      res.status(201).json({
        message: "Post created successfully!",
        post: newPost,
      });
    } else {
      res.status(404).json({
        message: "Something went wrong!",
      });
    }
  } catch (error) {
    console.error("Error saving post:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// Show the post by id

const getSinglePostController = async (req, res) => {
  const id = req.params.id;

  try {
    const post = await models.Post.findByPk(id);
    if (post) {
      res.status(200).json({ post });
    } else {
      res.status(404).json({ message: "Post not found" });
    }
  } catch (error) {
    console.error("Error fetching post:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// show the all post
const getAllPostController = async (req, res) => {
  try {
    const post = await models.Post.findAll();
    if (post) {
      res.status(200).json({ post });
    } else {
      res.status(404).json({
        message: "Post not found",
      });
    }
  } catch (error) {
    console.error("Error fetching all post:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// update post controller

const updatePostsController = async (req, res) => {
  const id = req.params.id;

  try {
    const updatePost = {
      title: req.body.title,
      content: req.body.content,
      imageUrl: req.body.image_url,
      categoryId: req.body.category_id,
    };

    // Validation schema

    const schema = {
      title: { type: "string", optional: false, max: "100", min:"5" },
      content: { type: "string", optional: false, max: "500", min:"10" },
      categoryId: { type: "number", optional: true },
    };

    const valid = new validator();

    const validationResponse = valid.validate(updatePost, schema);

    if (validationResponse !== true) {
      return res.status(400).json({
        message: "Validation failed!",
        error: validationResponse,
      });
    }


    const userId = 1;

    const modifyPost = await models.Post.update(updatePost, {
      where: { id: id, userId: userId },
    });

    if (modifyPost) {
      res.status(201).json({
        message: "Post updated successfully!",
        post: modifyPost,
      });
    } else {
      res.status(404).json({
        message: "Something went wrong!",
      });
    }
  } catch (error) {
    console.error("Error update post:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// Post delete controller

const deletePostsController = async (req, res) => {
  const id = req.params.id;
  const userId = 1;

  try {
    const deletePost = await models.Post.destroy({
      where: { id: id, userId: userId },
    });

    if (deletePost) {
      res.status(200).json({
        message: "Post deleted successfully",
      });
    } else {
      res.status(404).json({
        message: "Post not found",
      });
    }
  } catch (error) {
    console.error("Error delete post:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = {
  insertController,
  getSinglePostController,
  getAllPostController,
  updatePostsController,
  deletePostsController,
};
