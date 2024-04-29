const models = require("../models");

// Insert the post controller
const save = async (req, res) => {
  try {
    const post = {
      title: req.body.title,
      content: req.body.content,
      imageUrl: req.body.image_url,
      categoryId: req.body.category_id,
      userId: 1,
    };

    // const newPost = await Post.create(post);
    const newPost = await models.Post.create(post);

    res.status(201).json({
      message: "Post created successfully!",
      post: newPost,
    });
  } catch (error) {
    console.error("Error saving post:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// Show the post by id

const getSinglePost = async (req, res) => {
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
const getAllPost = async (req, res) => {
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

const updatePosts = async (req, res) => {
  const id = req.params.id;

  try {
    const updatePost = {
      title: req.body.title,
      content: req.body.content,
      imageUrl: req.body.image_url,
      categoryId: req.body.category_id,
    };

    const userId = 1;

    const modifyPost = await models.Post.update(updatePost, {
      where: { id: id, userId: userId },
    });

    res.status(201).json({
      message: "Post updated successfully!",
      post: modifyPost,
    });
  } catch (error) {
    console.error("Error update post:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// Post delete controller

const deletePosts = async(req,res)=>{
  const id = req.params.id;
  const userId = 1; 

  try {

    const deletePost = await models.Post.destroy({where:{id:id, userId:userId}}); 

    if (deletePost) {
      res.status(200).json({ 
        message:"Post deleted successfully"
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
}

module.exports = { save, getSinglePost, getAllPost,updatePosts,deletePosts };
