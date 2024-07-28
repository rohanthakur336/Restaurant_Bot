const express = require('express');
const { getRestaurants, getRestaurantMenu } = require('../controllers/restaurantController');

const router = express.Router();

router.get('/restaurants', getRestaurants);
router.get('/restaurants/:id/menu', getRestaurantMenu);

module.exports = router;
