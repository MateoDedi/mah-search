const mongoose = require('mongoose');
const { isEmail } = require('validator');

const companiesSchema = new mongoose.Schema({
    id_user: {type: String},
    jobTitle: {
        type: String,
        required: [true, 'Please enter your first name'],
        lowercase: true
    },
    website: {
        type: String,
        required: [true, 'Please enter your last name'],
        lowercase: true
    },
    employerContact: [{
        nameContact: {
            type: String,
            lowercase: true
        },
        emailContact: {
            type: String,
            required: false,
            lowercase: true,
            validate: [isEmail, 'Please enter a valid email'],
        },
        phone: {type: String},
        Address: {type: String}

    }],
    origin: [{type: String}],
    status: [{type: String}],
    comments: {content: String},

});

const Companies = mongoose.model('companies', companiesSchema);

module.exports = Companies;