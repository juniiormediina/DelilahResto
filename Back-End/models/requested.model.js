'use strict'

const { DataTypes } = require('sequelize');
const sequelize = require('../models/index');

const requestModel = sequelize.define(
	'requests',
	{
		id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        id_user: {
            allowNull: false,
            type: DataTypes.STRING
        }, 
        status: {
            allowNull: false,
            type: DataTypes.CHAR
        },
        Payment_method: {
            allowNull: false,
            type: DataTypes.INTEGER
        },
	},{
        timestamps: true,
        tableName: 'requests'
    }

);

module.exports = requestModel;