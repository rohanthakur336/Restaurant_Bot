const Restaurant = require('../models/restaurant');

const getRestaurants = async (req, res) => {
  try {
    const restaurants = await Restaurant.find();
    res.status(200).json(restaurants);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getRestaurantMenu = async (req, res) => {
  const { id } = req.params;
  try {
    const restaurant = await Restaurant.findById(id);
    if (!restaurant) {
      return res.status(404).json({ message: 'Restaurant not found' });
    }
    res.status(200).json(restaurant.menu);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getRestaurants,
  getRestaurantMenu
};
