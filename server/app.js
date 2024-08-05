const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const productRouter = require('./routes/productRoutes');
const userRouter = require('./routes/userRoutes');

const app = express();

app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}))

app.use(cookieParser());  // parse cookies

app.use(express.json());  //parse body

app.use('/api/v1/products',productRouter)
app.use('/api/v1/user', userRouter)

module.exports = app;


