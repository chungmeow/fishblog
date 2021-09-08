const express = require('express');
const UserService = require('../services/UserService');

const router = express.Router();

router.post('/users', UserService.create);
router.put('/users/:id', UserService.update);
router.get('/users/:id', UserService.fetch);
//router.delete('/users/:id', UserService.delete);

module.exports = router;