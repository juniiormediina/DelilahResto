'use strict'

const { DataTypes } = require('sequelize');
const sequelize = require('../models/index');

const userModel = sequelize.define(
	'user',
	{
		id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.SMALLINT
        },
        firstname: {
            allowNull: false,
            type: DataTypes.STRING
        }, 
        lastname: {
            allowNull: false,
            type: DataTypes.STRING
        },
        phone: {
            allowNull: false,
            type: DataTypes.INTEGER
        },
        address:{
            allowNull: false,
            type: DataTypes.STRING 
        },
        email: {
          allowNull: false,
          type: DataTypes.STRING
        },
        pass: {
            allowNull: false,
            type: DataTypes.STRING
        },
        rol:{
            allowNull: false,
            type: DataTypes.STRING
        },
	},{ timestamps: false,
    tableName: 'user'
    }
);

module.exports = userModel;