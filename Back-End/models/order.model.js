const { DataTypes } = require('sequelize');
const sequelize = require('../models/index');
const modelProducts = require('./product.model');
const modelRequests = require('./request.model');

const orderModel = sequelize.define(
	'order',
	{
		quantity: {
			type: DataTypes.INTEGER(10),
			allowNull: false
		},
	},
	{ 
		timestamps: true,
		tableName: 'order'
	}
);

modelProducts.belongsToMany(modelRequests, {through: orderModel});
modelRequests.belongsToMany(modelProducts, {through: orderModel});

module.exports = orderModel;