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
  } catch (err) {
    console.log(err);
  }
}



module.exports.userProfileDelete = async (req, res, next) => {
  console.log(req.body);
  try {
    const id = await res.locals.user._id;

    console.log(id);

    // Delete the jobs associated with the user
    const jobsDeleted = await Job.deleteMany({ id_user: id });

    // Delete the user
    const user = await User.findByIdAndDelete(id);

    if (!user && jobsDeleted.deletedCount === 0) {
      return res.status(404).json({ message: 'User and jobs not found' });
    }

    if (!user) {
      return res.status(404).json({ message: 'User not found, but jobs deleted successfully' });
    }

    if (jobsDeleted.deletedCount === 0) {
      return res.status(404).json({ message: 'Jobs not found, but user deleted successfully' });
    }

    res.cookie('jwt', '', { maxAge: 1 })

    return res.redirect('signup').status(200).json({ message: 'User and associated jobs deleted successfully' });

  } catch (err) {
    console.log(err);
    res.status(500).json({ message: 'Server error' });
  }
}


// module.exports.userProfileDelete = async (req, res, next) => {
//   try {
//     console.log('Route /delete-profile atteinte');
//     const id = await res.locals.user._id;

//     console.log('ID de l\'utilisateur à supprimer :', id);

//     // ... (le reste du code)

//   } catch (err) {
//     console.log(err);
//     res.status(500).json({ message: 'Server error' });
//   }
// };
