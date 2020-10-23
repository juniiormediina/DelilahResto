const { DataTypes } = require('sequelize');
const sequelize = require('../models/index');

const orderModel = sequelize.define(
	'order',
	{
		quantity: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
	},{ 
		timestamps: true,
		tableName: 'order'
	}
);

module.exports = orderModel;