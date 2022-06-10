const { Router } = require('express');
const authController = require('../controllers/authController');

const router = Router();

router.get('/register', authController.register_get);
router.post('/register', authController.register_post);
router.get('/login', authController.login_get);
router.post('/login', authController.login_post);

// router.get('/', (req,res) => {
//     res.render('index.ejs', {name: 'kyle'});
// });

// router.get('/login', (req, res) => {
//     res.render('login.ejs');
// });

// router.post('/login', (req, res) =>{

// })

// router.get('/register', (req, res) => {
//     res.render('register.ejs');
// });

// router.post('/register', (req, res) =>{
//     req.body.name
// })

module.exports = router;