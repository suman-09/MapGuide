const jwt = require('jsonwebtoken');
const User = require('../models/User');

const requireAuth = (req, res, next) => {
    const token = req.cookies.jwt; //get the token from the cookies

    //chech json web token exist & is verified
    if(token){
        jwt.verify(token, 'my secret', (err, decodedToken) => {
            if(err){
                console.log(err.message);
                res.redirect('/login');
            }
            else { 
                // console.log(decodedToken);
                next();
            }
        })
    }
    else{
        res.redirect('/login');
    }
}

//check current user
const checkUser = (req, res, next) => {
    const token = req.cookies.jwt;

    if (token){
        jwt.verify(token, 'my secret', async (err, decodedToken) => {
            if(err){
                console.log(err.message);
                res.local.user = null;
                next();
            }
            else { 
                // console.log(token);
                // console.log(decodedToken);
                // console.log('getting token');
                let user = await User.findById(decodedToken.id);
                // console.log(decodedToken.id);
                res.locals.user = user; //
                // console.log(user); 
                next();
            }
        })
    }
    else{
        res.local.user = null;
        next();
    }
}

module.exports = { requireAuth, checkUser };