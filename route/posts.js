const express = require("express");
const {insertController, getSinglePostController, getAllPostController, updatePostsController, deletePostsController} = require("../controller/posts");
const chechAuthMiddleware = require('../middleware/auth');

const router = express.Router();

router.post('/post',chechAuthMiddleware, insertController);
router.get('/getPost/:id', getSinglePostController);
router.get('/getAllPost', getAllPostController);
router.patch('/updatePost/:id',chechAuthMiddleware, updatePostsController);
router.delete('/deletePost/:id',chechAuthMiddleware, deletePostsController);

module.exports = router;
