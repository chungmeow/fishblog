const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcryptjs');

const UserModelSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
});

UserModelSchema.pre('save', next => {
    const user = this;
    bcrypt.genSalt(10, (error, salt) => {
        bcrypt.hash(user.password, 10, (error, hash) => {
            if (!!error) throw error;
            user.password = hash;
            next();
        });
    });
});

const UserModel = mongoose.model('User',UserModelSchema);

module.exports = UserModel;