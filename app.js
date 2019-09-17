const express = require('express');
const mongoose = require('mongoose');
const postsRoute = require('./routes/posts');
const bodyParser = require('body-parser');

require('dotenv/config');

const app = express();

app.use(bodyParser.json());

// Import Router

app.use('/posts', postsRoute);

// Middlewares


app.get('/', (req, res) => {
    res.send('We are on home');
});


// connect to the database
mongoose.set('useNewUrlParser', true);
mongoose.set('useUnifiedTopology', true);


mongoose.connect(
    process.env.DB_CONNECTION,
    () => console.log('conected to DB')
);

// How to we start listening server
app.listen(3030);