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
            type: DataTypes.STRING(50)
        }, 
        lastname: {
            allowNull: false,
            type: DataTypes.STRING(50)
        },
        phone: {
            allowNull: false,
            type: DataTypes.STRING
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
            type: DataTypes.STRING
        },
    },
    {
        timestamps: false,
        tableName: 'user'
    }
);

module.exports = userModel;