const { Router } = require('express');
const authController = require('../controllers/authController');
const { requireAuth, checkUser } = require('../middleware/authMiddleware');
const { fetchWikiExtract } = require('../public/helpers/mappage')//wikipedia api fetch

const router = Router();

router.get('/register', authController.register_get);
router.post('/register', authController.register_post);
router.get('/login', authController.login_get);
router.post('/login', authController.login_post);
router.get('/logout', authController.logout_get); //logging out user
router.get('/mappage', requireAuth, checkUser, authController.mappage_get); //added routing for mappage
router.post('/mappage', requireAuth, checkUser, authController.mappage_post); //added post for mappage
router.get('/savelocation',requireAuth, checkUser, authController.savelocation_get); //added routing for savelocation page
router.post('/savelocation',requireAuth, checkUser, authController.savelocation_post); 
router.get('/favlocation',requireAuth, checkUser, authController.favlocation_get); //added routing for favlocation page

fetchWikiExtract("amazon")
//console.log(wikidata);


module.exports = router;