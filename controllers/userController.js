module.exports.userProfileUpdate = async (req, res) => {
    const { firstname, lastname, email, password, linkedin, github, profilpicture, cv } = req.body;
  
    try {
      const user = await User.updateOne({ _id: req.user._id }, { firstname, lastname, email, password, linkedin, github, profilpicture, cv });
      res.status(200).json({ user: user._id });
    } 
    catch (err) {
      const errors = handleErrors(err);
      res.status(400).json({ errors });
    }
  
  }
  
  module.exports.userProfileDelete = async (req, res) => {
    const { firstname, lastname, email, password, linkedin, github, profilpicture, cv } = req.body;
  
    try {
      const user = await User.deleteOne({ _id: req.user._id }, { firstname, lastname, email, password, linkedin, github, profilpicture, cv });
      res.status(200).json({ user: user._id });
    } 
    catch (err) {
      const errors = handleErrors(err);
      res.status(400).json({ errors });
    }
  
  }