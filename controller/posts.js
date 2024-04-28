// // import postModel from "../models/post.js";
// import  postModel from '../models/post.js'


// const save = (req, res) => {
//   try {
//     const post = {
//       title: req.body.title,
//       content: req.body.content,
//       imageUrl: req.body.image_url,
//       categoryId: req.body.category_id,
//       userId: 1,
//     };

//     postModel.Post.create(post)
//       .then((result) => {
//         res.status(201).json({
//           message: "Post created successfully!",
//           post: result,
//         });
//       })
//       .catch((error) => {
//         res.status(401).json({
//           message: "Something went wrong!",
//           post: error,
//         });
//       });
//   } catch (error) {
//     console.error("Error saving post:", error);
//     res.status(500).json({ error: "Internal server error" });
//   }
// };

// export { save };




const  models  =require('../models') ;

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


 module.exports = { save };

