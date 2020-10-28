'use strict'

const { DataTypes } = require('sequelize');
const sequelize = require('../models/index');
const userModel = require('./user.model');

const requestModel = sequelize.define(
	'requests',
	{
		id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER(10)
        },
        status: {
            allowNull: false,
            type: DataTypes.STRING(50)
        },
        Payment_method: {
            allowNull: false,
            type: DataTypes.STRING(30)
        },
    },
    {
        timestamps: true,
        tableName: 'requests'
    }

);

userModel.hasMany(requestModel);
requestModel.belongsTo(userModel);

module.exports = requestModel;