"use strict";

const { DataTypes } = require("sequelize");
const sequelize = require("./index");
const User = require("./User.model");

const requestModel = sequelize.define(
  "requests",
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER(10),
    },
    status: {
      allowNull: false,
      type: DataTypes.STRING(50),
    },
    Payment_method: {
      allowNull: false,
      type: DataTypes.STRING(30),
    },
  },
  {
    timestamps: true,
    tableName: "requests",
  }
);

User.hasMany(requestModel);
requestModel.belongsTo(User);

module.exports = requestModel;
