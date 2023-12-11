const { Router } = require('express');
const userController = require('../controllers/userController');

const router = Router();


router.get('/user-profile', (req, res) =>  res.render('userProfile'));
router.put('/user-profile', userController.userProfileUpdate);
router.delete('/user-profile', userController.userProfileDelete);


module.exports = router;