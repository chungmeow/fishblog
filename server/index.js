const express = require('express');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const db = require('./db');
const userRouter = require('./routes/UserRouter');
const postRouter = require('./routes/PostRouter');

dotenv.config({ path: path.resolve(__dirname, '../.env') });

const api = express();
const apiPort = process.env.API_PORT;

api.use(bodyParser.urlencoded({extended: true}));
api.use(cookieParser());
// MemoryStore is default server-side session storage for development only
api.use(session({
    secret: process.env.DB_SESSION_KEY,
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({
        mongoUrl: process.env.DB_URI,
        dbName: process.env.DB_NAME,
        collectionName: process.env.DB_SESSION
    }),
    cookie: {
        secure: false,
        sameSite: false,
        maxAge: 1000 * 60 * 15 // Milliseconds 15min
    }
}));
api.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', process.env.APP_DIR);
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Credentials', 'true');
    next();
});
api.use(cors({
    origin: [process.env.APP_DIR],
    methods: ['POST', 'PUT', 'GET'],
    credentials: true,
    exposedHeaders: ['set-cookie']
}));
api.use(bodyParser.json());

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

api.use('/api', userRouter);
api.use('/api', postRouter);

api.listen(apiPort, ()=> {console.log('API server running on port ' + apiPort)});