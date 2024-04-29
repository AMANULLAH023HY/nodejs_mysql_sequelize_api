const express = require("express");
const {save,  getSinglePost, getAllPost, updatePosts, deletePosts} = require("../controller/posts");

const router = express.Router();

router.post('/post', save);
router.get('/getPost/:id', getSinglePost);
router.get('/getAllPost', getAllPost);
router.patch('/updatePost/:id', updatePosts);
router.delete('/deletePost/:id', deletePosts);

module.exports = router;
