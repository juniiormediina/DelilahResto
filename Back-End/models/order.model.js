const { DataTypes } = require("sequelize");
const sequelize = require("./index");
const Products = require("./Product.model");
const Requests = require("./Request.model");

const orderModel = sequelize.define(
  "order",
  {
    quantity: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
    },
  },
  {
    timestamps: true,
    tableName: "order",
  }
);

Products.belongsToMany(Requests, { through: orderModel });
Requests.belongsToMany(Products, { through: orderModel });

module.exports = orderModel;
