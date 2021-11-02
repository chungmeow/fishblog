const express = require('express');
const UserService = require('../services/UserService');

const router = express.Router();
const userService = new UserService();

router.post('/user/register', userService.create);
router.post('/user/login', userService.fetch);

module.exports = router;