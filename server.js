const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

//load env vars
dotenv.config({path: './.env'});

const app = express();

//view engine
app.set('view-engine', 'ejs');
app.use(express.urlencoded({ extended: false}));

//database connection
const dbURI = process.env.MONGODB_URL;  
mongoose.connect(dbURI)
 .then((result) => app.listen(8080))
 .catch((err) => console.log(err));

//routes
app.get('/', (req,res) => {
    res.render('index.ejs', {name: 'kyle'});
});

app.get('/login', (req, res) => {
    res.render('login.ejs');
});

app.post('/login', (req, res) =>{

})

app.get('/register', (req, res) => {
    res.render('register.ejs');
});

app.post('/register', (req, res) =>{
    req.body.name
})

//middleware
app.use(express.static("public"));

// app.listen(8080);

