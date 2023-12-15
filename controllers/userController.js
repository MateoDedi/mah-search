const { ObjectId } = require('mongodb');
const User = require('../models/User');
const Job = require('../models/ConfigJobs');
const { isEmail } = require('validator');
const bcrypt = require('bcrypt');


module.exports.userProfile = (req, res) => {
  const user = res.locals.user._id;
  res.status(200).render('userProfile');
}


module.exports.updateUserProfile = async (req, res) => {

  console.log(res.locals.user._id);
  try {
    let userInfos = {
      firstname,
      lastname,
      email,
      password,
      linkedin,
      github,
      profilpicture,
      cv,
    } = req.body;

    userInfos.password.length >= 6 ?
      userInfos.password = await bcrypt.hash(userInfos.password, 10) :
      userInfos.password = await User.findById(res.locals.user._id).password;

    const user = await User.findByIdAndUpdate(res.locals.user._id, userInfos);
    console.log(user);
    res.status(200).json({ user });
    // next();
    // res.status(200).render('userProfile', { update: false });
  } catch (err) {
    console.log(err);
  }
}



module.exports.userProfileDelete = async (req, res, next) => {

}