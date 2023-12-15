const { Router } = require('express');
const userController = require('../controllers/userController');
const jobController = require('../controllers/jobsController');

const router = Router();


router.get('/user-profile', (req, res) => res.render('userProfile', { update: false }))
router.get('/update-profile', (req, res) => res.render('userProfile', { update: true }));
router.put('/update-profile', userController.updateUserProfile);
router.delete('/delete-profile', userController.userProfileDelete)


module.exports = router;