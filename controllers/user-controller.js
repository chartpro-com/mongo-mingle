const { User, Thought } = require('../models');

const userController = {

//GET all users
  getAllUsers(req, res) {
    User.find({})
      .select("-__v")
      .sort({ _id: -1 })
      .then((dbUserData) => res.json(dbUserData))
      .catch((err) => {
        console.log(err);
        res.status(400).json(err);
      });
  },

 //POST user
 createUser({ body }, res) {
  User.create(body)
    .then((dbUserData) => res.json(dbUserData))
    .catch((err) => res.status(400).json(err));
},

}

