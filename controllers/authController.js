const User = require('../models/User');
const jwt = require('jsonwebtoken');
// const { name } = require('ejs');

//handle errors
const handleErrors = (err) => {
    console.log(err.message, err.code);
    let errors = { email: '', password: '' };

    //duplicate error code
    if (err.code === 11000) {
        errors.email = 'that email is already registered';
        return errors;
    }

    //validation errors
    if (err.message.includes('user validation failed')) {
        Object.values(err.errors).forEach(({ properties }) => {
            // console.log(properties);
            errors[properties.path] = properties.message;
        })
    }

    return errors;
}

//creating a function for cookies
const maxAge = 3 * 24 * 60 * 60; //here it takes second but in cookies it in mili second
const createToken = (id) => {
    return jwt.sign({"id": id}, 'my secret', {
        expiresIn:  maxAge
    });
};

module.exports.register_get = (req, res) => {
    res.render('register.ejs');
}

module.exports.login_get = (req, res) => {
    res.render('login.ejs');
}

//mappage auth controller
module.exports.mappage_get = (req, res) => {
    res.render('mappage.ejs');
}
module.exports.register_post = async (req, res) => {
    const {name, email, password } = req.body; //added name
    try {
        const user = await User.create({name: name, email: email, password: password }); //adding name
        const token = createToken(user._id);
        res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000 });
        res.status(201).json({ user: user._id });
    }
    catch (err) {
        const errors = handleErrors(err);
        res.status(400).json({ errors });
    }
}
module.exports.login_post = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user2 = await User.findOne({email});
        const user = await user2.login(password);
        if(!user){
            res.redirect('/login');
        }
        else{
            let uid = user2._id+'';
            // console.log(uid);
            const token = createToken(uid);
            res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000 });
            //res.status(200).json({ user: user._id });
            res.redirect('/mappage'); // changed to mappage from /
        }
       
    } catch (err) {
        const errors = handleErrors(err);
        res.status(400).json({ errors });
    }
}

//logging users out

module.exports.logout_get = (req, res) => {
    res.cookie('jwt', '', { maxAge: 1 });
    res.redirect('/');
}

//map page post addind information from mappage
