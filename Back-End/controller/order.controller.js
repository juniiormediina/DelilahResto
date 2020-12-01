const Order = require("../models/Order.model");

const find = (req, res) => {
  Order.findAll()
    .then((orders) => {
      res.status(200).json(orders);
    })
    .catch((err) => {
      res.status(500).json({
        message: "Sorry, the server has presented an error. Try again later",
      });
    });
};

module.exports = find;
