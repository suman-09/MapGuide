const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const authRoutes = require('./routes/authRoutes');
const cookieParser = require('cookie-parser');

//load env vars
dotenv.config({path: './.env'});

const app = express();

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
    res.render('index.ejs', {name: 'kyle'});
});
app.use(authRoutes);





//only for learning

// //cookies
// app.get('/set-cookies', (req, res) => {

//     res.cookie('newUser', false);
//     res.cookie('isEmployee', true, { maxAge: 1000 * 60 * 60 *24, httpOnly: true }); 
    
//     //secure: true now this cookie is only gonna send when there will be an secure connection like https in our case its not going to send as we r in http 
//     //httpOnly: true this cookie is not accessable by frontend js
//     //both the properties are important for auth

//     res.send('you got the cookies!');

// });
// app.get('/read-cookies', (req, res) => {

//     const cookies = req.cookies;
//     console.log(cookies.newUser);

//     res.json(cookies);

// });

