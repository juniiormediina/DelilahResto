'use strict'

const { DataTypes } = require('sequelize');
const sequelize = require('../models/index');

const productModel = sequelize.define(
	'product',
	{
		id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.SMALLINT
        },
        name: {
            allowNull: false,
            type: DataTypes.STRING
        }, 
        description: {
            allowNull: false,
            type: DataTypes.STRING
        },
        type: {
            allowNull: false,
            type: DataTypes.STRING
        },
        price:{
            allowNull: false,
            type: DataTypes.STRING 
        },
        image: {
          allowNull: false,
          type: DataTypes.STRING
        }
    },
    { 
        timestamps: false,
        tableName: 'product'
    }
);

module.exports = productModel;
