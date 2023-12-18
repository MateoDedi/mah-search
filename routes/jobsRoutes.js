const { Router } = require('express');

const jobsController = require('../controllers/jobsController')

const router = Router();

router.post('/create-job', jobsController.createJob);
router.get('/create-job', (req, res) => res.render('createJob'));
router.get('/list-jobs', jobsController.listJobs);
router.get('/job', jobsController.JobItem);
router.put('/job', jobsController.JobUpdate);
router.delete('/job', jobsController.JobDelete);

module.exports = router;