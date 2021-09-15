const Service = require('./Service');
const User = require('../models/UserModel');

class UserService extends Service {
    constructor() {
        super(User, 'User');
    }
}

module.exports = UserService;