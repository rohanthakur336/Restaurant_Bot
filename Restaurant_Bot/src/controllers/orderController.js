const Order = require('../models/order');

const createOrder = async (req, res) => {
  const { restaurantId, items, customerName, customerPhone, customerAddress } = req.body;
  const total = items.reduce((acc, item) => acc + (item.price * item.quantity), 0);

  const order = new Order({
    restaurantId,
    items,
    total,
    customerName,
    customerPhone,
    customerAddress
  });

  try {
    await order.save();
    res.status(201).json(order);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createOrder
};
