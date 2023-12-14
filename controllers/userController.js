const { ObjectId } = require('mongodb');
const User = require('../models/User');
const Job = require('../models/ConfigJobs');

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

    userInfos.password = await bcrypt.hash(userInfos.password, 10);

    const user = await User.findByIdAndUpdate(res.locals.user._id, userInfos);
    res.status(200).json(user);
  } catch (err) {
    console.log(err);
  }
}

module.exports.userProfileDelete = async (req, res, next) => {
  try {
    const userId = req.params.id; // Assuming the ID is passed as a parameter

    // Delete user profile
    await User.findByIdAndDelete(userId);

    // Delete jobs linked to the user
    await Job.deleteMany({ user: userId });

    res.status(200).json({ message: 'User profile and linked jobs deleted successfully' });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: 'An error occurred while deleting user profile and linked jobs' });
  }
}