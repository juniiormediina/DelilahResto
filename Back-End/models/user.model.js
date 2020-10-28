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
            type: DataTypes.INTEGER(10)
        },
        firstname: {
            allowNull: false,
            type: DataTypes.STRING(50)
        }, 
        lastname: {
            allowNull: false,
            type: DataTypes.STRING(50)
        },
        phone: {
            allowNull: false,
            type: DataTypes.STRING(15)
        },
        address:{
            allowNull: false,
            type: DataTypes.STRING(100)
        },
        email: {
          allowNull: false,
          type: DataTypes.STRING(50)
        },
        pass: {
            allowNull: false,
            type: DataTypes.STRING(20)
        },
        rol:{
            allowNull: false,
            type: DataTypes.STRING(10)
        },
    },
    {
        timestamps: false,
        tableName: 'user'
    }
);

module.exports = userModel;