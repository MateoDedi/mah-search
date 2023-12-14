const { Router } = require('express');
const userController = require('../controllers/userController');
const jobController = require('../controllers/jobsController');

const router = Router();


router.get('/user-profile', userController.userProfile);
router.put('/user-profile', userController.updateUserProfile);
router.delete('/user-profile', userController.userProfileDelete, jobController.JobDelete, (req, res) => res.redirect('/'));

module.exports = router;