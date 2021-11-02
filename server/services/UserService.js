const Service = require('./Service');
const bcrypt = require('bcryptjs');
const User = require('../models/UserModel');

class UserService extends Service {
    constructor() {
        super(User, 'User');
    };
    create = async (req, res) => {
        const { un, pw } = req.body;

        // Check required fields
        if (!un || !pw) {
            return res.status(400).json({
                success: false,
                error: 'Please enter all fields'
            });
        }
        // Check password length
        if (pw.length < 6) {
            return res.status(400).json({
                success: false,
                error: 'Password should be at least 6 characters long'
            });
        }
        bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(pw, salt, (err, hash) => {
                if (err) throw err;
                User.create({username: un, password: hash})
                    .then(() => {
                        res.status(201).json({
                            success: true,
                            message: 'User registered'
                        });
                    })
                    .catch(err => {
                        return res.status(400).json({
                            success: false,
                            error: err
                        });
                    })
            });
        });
    };
    fetch = async (req, res) => {
        const { un, pw } = req.body;

        await User.findOne({ username: un })
            .then(user => {
                if (!user) {
                    return res.status(400).json({
                        success: false,
                        error: 'Credentials do not match'
                    });
                }
                bcrypt.compare(pw, user.password).then(isMatch => {
                    if (!isMatch) {
                        return res.status(400).json({
                            success: false,
                            error: 'Credentials do not match'
                        });
                    }
                    req.session.user = { id:user._id };
                    req.session.save(err => {
                        if (err) console.log(err)
                    });
                    return res.status(200).json({
                        success: true,
                        message: `Credentials match`
                    });
                });
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