const Service = require('./Service');
const bcrypt = require('bcryptjs');
const User = require('../models/UserModel');

class UserService extends Service {
    constructor() {
        super(User, 'User');
    };
    fetch = async (req, res) => {
        const { un, pw } = req.body;

        await User.findOne({ username: un})
        .then(user => {
            if (!!user) {
                bcrypt.compare(pw, user.password).then(same => {
                    if (same) {
                        return res.status(200).json({
                            success: true,
                            id: user._id,
                            message: `Credentials match`
                        });
                    } else {
                        return res.status(400).json({
                            success: false,
                            error: 'Credentials do not match'
                        });
                    }
                });
            } else {
                return res.status(400).json({
                    success: false,
                    error: 'Credentials do not match'
                });
            }
        })
        .catch(error => {
            return res.status(400).json({
                success: false,
                error: error
            });
        });
    };
}

module.exports = UserService;