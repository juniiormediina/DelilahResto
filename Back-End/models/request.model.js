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
            type: DataTypes.INTEGER
        },
        /* id_user: {
            allowNull: false,
            type: DataTypes.STRING
        }, */ 
        status: {
            allowNull: false,
            type: DataTypes.STRING
        },
        Payment_method: {
            allowNull: false,
            type: DataTypes.STRING
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