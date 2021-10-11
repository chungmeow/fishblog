const express = require('express');
const PostService = require('../services/PostService');

const router = express.Router();
const postService = new PostService();

router.post('/post', postService.create);
//router.put('/post/:id', postService.update);
//router.get('/post/:id', postService.fetch);
//router.delete('/post/:id', postService.delete);

module.exports = router;