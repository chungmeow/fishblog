const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

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

UserModelSchema.pre('save', function(next){
   const user = this;

   bcrypt.hash(user.password, 10, (error, hash) => {
      user.password = hash;
      next();
   });
});

const UserModel = mongoose.model('User',UserModelSchema);

module.exports = UserModel;