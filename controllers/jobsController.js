const { ObjectId } = require("mongodb");
const Job = require("../models/ConfigJobs")
const User = require("../models/User");



// handle errors
const handleErrors = (err) => {
    let errors = { email: ''};

    // incorrect email
    if (err.errors.emailContact.properties.message === 'Please enter a valid email') {
        errors.email = 'Please enter a valid email';
    }

    return errors;
}


module.exports.createJob = async (req, res) => {
    let i = res.locals.user._id
    // const obj = new ObjectId()
    // const idString = obj.toHexString(i)
    // console.log(idString);

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
        res.status(201).json({resultat})
    })
    .catch(err => {
        // console.log(err.errors.emailContact.properties.message);
        handleErrors(err)
        const errors = handleErrors(err);
        res.status(400).json({ errors });
    })
}


module.exports.listJobs = async (req, res) => {
    try {
        const userId = res.locals.user._id;
        const jobs = await Job.find({ id_user: userId });
        res.status(200).json(jobs);
    } catch (err) {
        res.status(500).json({ error: "Internal server error" });
    }
}

module.exports.JobItem = async (req, res) => {
    const jobId = req.params.id; 
    try {
        const job = await Job.findById(jobId);
        res.status(200).json(job);
    } catch (err) {
        res.status(500).json({ error: "Job not found" });
    }
};
