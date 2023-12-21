// jobsController.js

const { ObjectId } = require("mongodb");
const Job = require("../models/ConfigJobs");
const User = require("../models/User");

// handle errors
const handleErrors = (err) => {
    let errors = { email: '' };

    if (err.errors && err.errors.emailContact) {
        // incorrect email
        if (err.errors.emailContact.properties.message === 'Please enter a valid email') {
            errors.email = 'Please enter a valid email';
        }
    }

    return errors;
};


module.exports.createJob = async (req, res) => {
    let i = res.locals.user._id
        ;

    let jobInfos = {
        jobTitle,
        website,
        nameContact,
        emailContact,
        phone,
        Address,
        origin,
        statusCompanie,
        comments
    } = req.body;

    jobInfos.id_user = i

    // console.log(companieInfos);

    const job = await Job.create(jobInfos)
        .then(resultat => {
            console.log(resultat)
            res.status(201).json({ resultat })
        })
        .catch(err => {
            const errors = handleErrors(err);
            res.status(400).json({ errors });
        })
}




module.exports.listJobs = async (req, res) => {
    try {
        const id = res.locals.user._id;
        const jobs = await Job.find({ id_user: id });
        res.render('viewJobs', { jobs, origins: [], statusJobs: [], filterOrigin: req.query.filterOrigin, filterStatus: req.query.filterStatus });
    } catch (err) {
        res.status(500).json({ error: "Failed to retrieve jobs" });
    }
};

module.exports.viewJob = async (req, res) => {
    const jobId = req.params.id;

    try {
        const job = await Job.findById(jobId);

        if (job) {
            res.render('viewJob', { job, updateJob: false });
        } else {
            res.status(404).json({ error: 'Job not found' });
        }
    } catch (err) {
        res.status(500).json({ error: 'Failed to retrieve job' });
    }
};

module.exports.editJob = async (req, res) => {
    const jobId = req.params.id;

    try {
        const job = await Job.findById(jobId);

        if (job) {
            res.render('viewJob', { job, updateJob: true });

        } else {
            res.status(404).json({ error: 'Job not found' });
        }
    } catch (err) {
        res.status(500).json({ error: 'Failed to retrieve job' });
    }
};



module.exports.updateJob = async (req, res) => {
    const jobId = req.params.id;


    let jobInfos = {
        jobTitle,
        website,
        nameContact,
        emailContact,
        phone,
        Address,
        origin,
        statusJob,
        comments
    } = req.body;
    // console.log(jobId);
    // console.log(req.body);


    try {
        const updatedJob = await Job.findByIdAndUpdate(jobId, jobInfos, { new: true });

        res.status(200).json({ updateJob: false });
    } catch (err) {

        console.error('Error updating job:', error);
        res.status(500).json({ error: 'Failed to update job' });
    }
};


module.exports.deleteJob = async (req, res) => {
    const jobId = req.params.id;
    console.log(`received delete request for job, ${jobId}`);

    try {
        const deletedJob = await Job.findByIdAndDelete(jobId);

        if (deletedJob) {
            res.json({ success: true });
        } else {
            res.status(404).json({ error: 'Job not found' });
        }
    } catch (error) {
        console.error('Error deleting job:', error);
        res.status(500).json({ error: 'Failed to delete job' });
    }
};