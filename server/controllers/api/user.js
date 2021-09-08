const router = require('express').Router();
const { User } = require('../../models')



//get all users
router.get('/', async (req, res) => {
  try {
    const dbUserData = await User.findAll({});
    const userData = dbUserData.map((user) => user.get({}))
    res.status(200).json(userData);
    

  } catch (err) {
    res.status(500).json(err)
  }
});

//get one user
router.get('/', async (req, res) => {
  try {
    const dbUserData = await User.findByPk(req.params);
    const userData = dbUserData.map((user) => user.get({}))
    res.status(200).json(userData);
    

  } catch (err) {
    res.status(500).json(err)
  }
});

router.post('/signup', async (req, res) => {
  try {
    const userData = await User.create({
      username: req.body.username,
      password: req.body.password,
    });
  
    
}
 
})