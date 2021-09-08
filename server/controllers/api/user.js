const router = require('express').Router();
const { User } = require('../../models')




router.get('/', async (req, res) => {
  try {
    const dbUserData = await User.findAll({});
    const userData = dbUserData.map((user) => user.get({}))
    res.status(200).json(userData);
    

  } catch (err) {
    res.status(500).json(err)
  }
});
