const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');

const authRouter = require('./routers/authrouter');
const donorRouter = require('./routers/donorrouter');
const requestRouter = require('./routers/requestrouter');

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: 'http://localhost:3000', // Replace with your frontend URL
    credentials: true
}));

app.use('/api/auth', authRouter);

app.use('/api/donor', donorRouter);

app.use('/api/request', requestRouter);


module.exports = app;
