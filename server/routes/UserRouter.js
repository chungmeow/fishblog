const express = require('express');
const UserService = require('../services/UserService');

const router = express.Router();
const userService = new UserService();

router.post('/users', userService.create);
router.get('/users/:id', userService.fetch);

module.exports = router;