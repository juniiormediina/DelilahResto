"use strict";

const { DataTypes } = require("sequelize");
const sequelize = require("./index");

const productModel = sequelize.define(
  "product",
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER(10),
    },
    name: {
      allowNull: false,
      type: DataTypes.STRING(50),
    },
    description: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    type: {
      allowNull: false,
      type: DataTypes.STRING(20),
    },
    price: {
      allowNull: false,
      type: DataTypes.STRING(20),
    },
    image: {
      allowNull: false,
      type: DataTypes.STRING(),
    },
  },
  {
    timestamps: false,
    tableName: "product",
  }
);

module.exports = productModel;
