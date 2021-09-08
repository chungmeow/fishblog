const express = require('express');
const PostService = require('../services/PostService');

const router = express.Router();

router.post('/post', PostService.create);
router.put('/post/:id', PostService.update);
router.get('/post/:id', PostService.fetch);
router.delete('/post/:id', PostService.delete);

module.exports = router;