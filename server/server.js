const mongoose = require('mongoose')
const dotenv = require('dotenv');
const app = require('./app')

// Dotenv
dotenv.config({ path: './config.env' });

// MongoDb database
const DB = process.env.BANEX_CONNECTION_STRING
mongoose.connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('DB connection sucessfull')).catch(err => console.log('cant connect to database'));

// App listen
const port = 3000;
app.listen(port, '127.0.0.1', (() => {
    console.log(`App running on port ${port}`);
}));


