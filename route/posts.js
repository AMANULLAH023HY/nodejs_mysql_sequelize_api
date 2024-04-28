const express = require("express");
const {save} = require("../controller/posts");

const router = express.Router();

router.post('/post', save);

module.exports = router;
