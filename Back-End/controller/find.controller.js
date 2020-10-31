const userModel = require('../models/user.model');
const productModel = require('../models/product.model');
const requestModel = require('../models/request.model');
const { response } = require('express');

const findRequest = (id) => {
	return new Promise((res, rejc) => {
		if (!id) {
			rejc({ status: 400, message: 'Faltan el id, por favor envielo' });
		} else {
			requestModel.findAll({ where: { id: id }, include: [productModel, userModel], raw: true, nest: true }).then(async(response) => {
				await res(response);
			}).catch((err) => {
				console.log(err);
			});
		}
	});
};

const findProducts = (id) =>{
	return new Promise((res, rejc)=>{
		if(!id){
			rejc({ status: 400, message: 'Falta el id, por favor ingreselo' });
		}else{
			productModel.findAll({ where: { id: id } }).then(async(response)=>{
				await res(response);
			}).catch((err)=>{
				console.log(err);
			})
		}
	});
};

module.exports = {
	findRequest,
	findProducts
};