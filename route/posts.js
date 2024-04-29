const express = require("express");
const {save,  getSinglePost, getAllPost} = require("../controller/posts");

const router = express.Router();

router.post('/post', save);
router.get('/getPost/:id', getSinglePost);
router.get('/getAllPost', getAllPost);
router.put('/updatePost', updatePost);

module.exports = router;
