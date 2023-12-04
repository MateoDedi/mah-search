const mongoose = require('mongoose');
const { isEmail } = require('validator');

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, 'Please enter a first name'],
        lowercase: true,
        },       
    lastName: {
        type: String,
        required: [true, 'Please enter a last name'],
        lowercase: true,
        },
    email: {
            type: String,
            required: [true, 'Please enter an email'],
            unique: true,
            lowercase: true,
            validate: [isEmail, 'Please enter a valid email']
        },
    password: {
            type: String,
            required: [true, 'Please enter a password'],
            minlength: [6, 'Minimum password length is 6 characters'],
          },
    url_linkedin: {
        type: String,
        },
    url_github:{
        type: String,
        },
    url_photoprofil:{
        type: String,
        },
    url_cv:{
        type: String,
        },
    companies:{
        job_title: {
            type: String,
            // required: [true, 'Please enter a job title'],
            lowercase: true,
            },
        url_website: {
            type: String,
            },
        employer_contact:{
            name:{
                type: String,
                lowercase: true,
                },
            email:{
                type: String,
                unique: true,
                lowercase: true,
                validate: [isEmail, 'Please enter a valid email']
                },
            phone:{ 
                type: String,
                },
            adress:{
                type: String,
                lowercase: true,
                },
            },  
        origin:[
            {type: String,}
        ],
        status:[
            {type: String,}
        ],
        comments:{
            type: String,
            }
    }
  });

    module.exports = userSchema;