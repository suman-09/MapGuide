const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const authRoutes = require('./routes/authRoutes');
const cookieParser = require('cookie-parser');
const server = require('http').createServer(app);

//load env vars
dotenv.config({path: './.env'});

//middleware
app.use(express.static("public"));
app.use(express.json());
app.use(cookieParser());

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
    res.render('login.ejs', {name: 'kyle'});
});
app.use(authRoutes);

