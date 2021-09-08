const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const db = require('./db');
const userRouter = require('./routes/UserRouter');
const postRouter = require('./routes/PostRouter');

dotenv.config({ path: path.resolve(__dirname, '../.env') });

const api = express();
const apiPort = process.env.API_PORT;

api.use(bodyParser.urlencoded({extended: true}));
api.use(cors());
api.use(bodyParser.json());

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

api.use('/api', userRouter);
api.use('/api', postRouter);

api.listen(apiPort, ()=> {console.log('API server running on port ' + apiPort)});