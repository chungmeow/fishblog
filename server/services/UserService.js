const Service = require('./Service');
const User = require('../models/UserModel');

const UserService = Service(User, 'User');

module.exports = UserService;