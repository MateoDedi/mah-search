const { ObjectId } = require("mongodb");
const Companies = require("../models/ConfigCompanies")
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


module.exports.add_companie = async (req, res) => {
    let i = res.locals.user._id
    // const obj = new ObjectId()
    // const idString = obj.toHexString(i)
    // console.log(idString);

    let companieInfos = {
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

    companieInfos.id_user = i

    // console.log(companieInfos);

    const companie = await Companies.create(companieInfos)
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


module.exports.list_companies = async (req, res) => {
    // const dataEmail = await res.json()
    // let i = new ObjectId(dataEmail.locals.user._id)
    // i = JSON.stringify(i)
    // console.log(i);
    res.end()
}