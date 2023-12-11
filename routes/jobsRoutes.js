const { Router } = require('express');

const jobsController = require('../controllers/jobsController')

const router = Router();

router.post('/create-job', jobsController.createJob)
router.get('/list-jobs', jobsController.listJobs)
router.get('/create-job', (req, res) => res.render('createJob'))
router.get('/job/:id', jobsController.JobItem);
router.put('/job/:id', jobsController.JobUpdate);
router.delete('/job/:id', jobsController.JobDelete);
module.exports = router;