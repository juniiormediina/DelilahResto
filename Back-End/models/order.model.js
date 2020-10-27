const { DataTypes } = require('sequelize');
const sequelize = require('../models/index');
const modelProducts = require('./products.model');
const modelRequests = require('./requested.model');

const orderModel = sequelize.define(
	'order',
	{
		/* quantity: {
			type: DataTypes.INTEGER,
			allowNull: false,
		}, */
	},
	{ 
		timestamps: true,
		tableName: 'order'
	}
);

modelProducts.belongsToMany(modelRequests, {through: orderModel});
modelRequests.belongsToMany(modelProducts, {through: orderModel});

module.exports = orderModel;