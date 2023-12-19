const { Router } = require('express');

const jobsController = require('../controllers/jobsController')

const router = Router();

router.post('/create-job', jobsController.createJob);
router.get('/create-job', (req, res) => res.render('createJob'));
router.get('/list-jobs', jobsController.listJobs);
router.get('/job/:id', jobsController.viewJob);
router.get('/job/update/:id', jobsController.editJob);
router.put('/job/update/:id', jobsController.updateJob);
router.delete('/job/delete/:id', jobsController.deleteJob);

module.exports = router;