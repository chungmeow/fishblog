const mongoose = require('mongoose');
const path = require('path');
const dotenv = require('dotenv');

dotenv.config({path: path.resolve(__dirname, '../../.env')});

mongoose
    .connect(process.env.DB_URI, {useNewUrlParser: true, useUnifiedTopology: true, serverSelectionTimeoutMS: 5000})
    .catch(e => {console.error('Connection error', e.message)});

module.exports = mongoose.connection;