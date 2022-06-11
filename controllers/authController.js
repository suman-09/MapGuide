const User = require('../models/User');

module.exports.register_get = (req, res) => {
    res.render('register.ejs');
}

module.exports.login_get = (req, res) => {
    res.render('login.ejs');
}
module.exports.register_post = async (req, res) => {
    const { name, email, password } = req.body;
    try {
        const user = await User.create({ name, email, password });
        res.status(201).json(user);
    }
    catch (err) {
        console.log(err);
        res.status(400).send('error, user no created');
    }
}
module.exports.login_post = (req, res) => {
    res.send('user login');
}