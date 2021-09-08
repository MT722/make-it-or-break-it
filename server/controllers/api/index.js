const router = require('express').Router();

const stockRoutes = require('./stock');
const userStockRoutes = require('./user-stock');
const userRoutes = require('./user');

router.use('/stock', stockRoutes);
router.use('/user', userStockRoutes);
router.use('/userStock', userRoutes);

module.exports = router