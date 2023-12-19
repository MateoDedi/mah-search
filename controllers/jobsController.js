// const { ObjectId } = require("mongodb");
// const Job = require("../models/ConfigJobs")
// const User = require("../models/User");

// // handle errors
// const handleErrors = (err) => {
//     let errors = { email: '' };

//     // incorrect email
//     if (err.errors.emailContact.properties.message === 'Please enter a valid email') {
//         errors.email = 'Please enter a valid email';
//     }

//     return errors;
// }


// module.exports.createJob = async (req, res) => {
//     let i = res.locals.user._id
//         ;

//     let jobInfos = {
//         jobTitle,
//         website,
//         nameContact,
//         emailContact,
//         phone,
//         Address,
//         origin,
//         statusCompanie,
//         comments
//     } = req.body;

//     jobInfos.id_user = i

//     // console.log(companieInfos);

//     const job = await Job.create(jobInfos)
//         .then(resultat => {
//             console.log(resultat)
//             res.status(201).json({ resultat })
//         })
//         .catch(err => {
//             const errors = handleErrors(err);
//             res.status(400).json({ errors });
//         })
// }


// ///// du début // module.exports.listJobs = async (req, res) => {
// //     console.log(res);
// //     try {
// //         const id = res.locals.user._id
// //         const jobs = await Job.find({ id_user: id });
// //         res.render('viewJobs', { jobs });
// //     } catch (err) {
// //         res.status(500).json({ error: "Failed to retrieve jobs" });
// //     }
// // }

// module.exports.listJobs = async (req, res) => {
//     try {
//         const id = res.locals.user._id;
//         const jobs = await Job.find({ id_user: id });
//         res.render('viewJobs', { jobs, origins: [], statusJobs: [], filterOrigin: req.query.filterOrigin, filterStatus: req.query.filterStatus });
//     } catch (err) {
//         res.status(500).json({ error: "Failed to retrieve jobs" });
//     }
// }



// ////// du début module.exports.JobItem = async (req, res) => {
// //     const jobId = req.params.id;
// //     try {
// //         const job = await Job.findById(jobId);
// //         res.status(200).json(job);
// //     } catch (err) {
// //         res.status(500).json({ error: "Job not found" });
// //     }
// // };

// module.exports.viewJob = async (req, res) => {
//     const jobId = req.params.id;

//     try {
//         const job = await Job.findById({ _id: jobId });

//         if (job) {
//             res.render('viewJob', { job });
//         } else {
//             res.status(404).json({ error: 'Job not found' });
//         }
//     } catch (err) {
//         res.status(500).json({ error: 'Failed to retrieve job' });
//     }
// };


// //du début ////// module.exports.updateJob = async (req, res) => {
// //     const jobId = req.params.id;
// //     const jobInfos = {
// //         jobTitle,
// //         website,
// //         nameContact,
// //         emailContact,
// //         phone,
// //         Address,
// //         origin,
// //         statusCompanie,
// //         comments
// //     } = req.body;
// //     try {
// //         const job = await Job.findByIdAndUpdate(jobId, jobInfos, { new: true });
// //         res.status(200).json(job);
// //     } catch (err) {
// //         res.status(500).json({ error: "Job not found" });
// //     }
// // }

// // module.exports.deleteJob = async (req, res) => {
// //     const jobId = req.body._id;
// //     try {
// //         const job = await Job.findByIdAndDelete(jobId);
// //         res.status(200).json({ msg: "Job deleted successfully" });
// //     } catch (err) {
// //         res.status(500).json({ error: "Job not found" });
// //     }
// // }


// module.exports.editJob = async (req, res) => {
//     const jobId = req.params.id;

//     try {
//         const job = await Job.findById(jobId);

//         if (job) {
//             res.render('viewJob', { job, updateJob: true });
//         } else {
//             res.status(404).json({ error: 'Job not found' });
//         }
//     } catch (err) {
//         res.status(500).json({ error: 'Failed to retrieve job' });
//     }
// };

// module.exports.updateJob = async (req, res) => {
//     const jobId = req.params.id;
//     const jobInfos = {
//         jobTitle,
//         website,
//         nameContact,
//         emailContact,
//         phone,
//         Address,
//         origin,
//         statusCompanie,
//         comments,
//     } = req.body;

//     try {
//         const job = await Job.findByIdAndUpdate(jobId, jobInfos, { new: true });
//         res.redirect(`/job/${job._id}`);
//     } catch (err) {
//         res.status(500).json({ error: 'Job not found' });
//     }
// };

// module.exports.deleteJob = async (req, res) => {
//     const jobId = req.params.id;

//     try {
//         await Job.findByIdAndDelete(jobId);
//         res.redirect('/list-jobs');
//     } catch (err) {
//         res.status(500).json({ error: 'Job not found' });
//     }
// };



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

// module.exports.createJob = async (req, res) => {
//     let i = res.locals.user._id;

//     let jobInfos = {
//         jobTitle: req.body.jobTitle,
//         website: req.body.website,
//         nameContact: req.body.nameContact,
//         emailContact: req.body.emailContact,
//         phone: req.body.phone,
//         Address: req.body.Address,
//         origin: req.body.origin,
//         statusCompanie: req.body.statusCompanie,
//         comments: req.body.comments
//     };

//     jobInfos.id_user = i;

//     const job = await Job.create(jobInfos)
//         .then(resultat => {
//             console.log(resultat);
//             res.status(201).json({ resultat });
//         })
//         .catch(err => {
//             handleErrors(err);
//             const errors = handleErrors(err);
//             res.status(400).json({ errors });
//         });
// };

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
    const jobInfos = {
        jobTitle: req.body.jobTitle,
        website: req.body.website,
        nameContact: req.body.nameContact,
        emailContact: req.body.emailContact,
        phone: req.body.phone,
        Address: req.body.Address,
        origin: req.body.origin,
        statusCompanie: req.body.statusCompanie,
        comments: req.body.comments
    };

    try {
        const job = await Job.findByIdAndUpdate(jobId, jobInfos, { new: true });
        res.redirect(`/job/${job._id}`);
    } catch (err) {
        res.status(500).json({ error: 'Job not found' });
    }
};

// module.exports.deleteJob = async (req, res) => {
//     const jobId = req.params.id;

//     try {
//         await Job.findByIdAndDelete(jobId);
//         res.redirect('/list-jobs');
//     } catch (err) {
//         res.status(500).json({ error: 'Job not found' });
//     }
// };


module.exports.deleteJob = async (req, res) => {
    const jobId = req.params.id;

    try {
        await Job.findByIdAndDelete(jobId);
        res.json({ success: true });
    } catch (err) {
        res.status(500).json({ error: 'Job not found' });
    }
};
