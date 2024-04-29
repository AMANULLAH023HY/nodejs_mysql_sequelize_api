const express = require("express");
const {save, showPost} = require("../controller/posts");

const router = express.Router();

router.post('/post', save);
router.get('/showPost/:id', showPost)

module.exports = router;
