const express = require("express");
const {insertController, getSinglePostController, getAllPostController, updatePostsController, deletePostsController} = require("../controller/posts");

const router = express.Router();

router.post('/post', insertController);
router.get('/getPost/:id', getSinglePostController);
router.get('/getAllPost', getAllPostController);
router.patch('/updatePost/:id', updatePostsController);
router.delete('/deletePost/:id', deletePostsController);

module.exports = router;
