const productModel = require('../models/product.model');
const requestModel = require('../models/request.model');

const deleteProducts = (id) => {
	return new Promise((res, rejc) => {
		productModel.destroy({ where: { id: id } }).then((response) => {
			if (response === 1) {
				res('producto eliminado');
			} else {
				rejc({ status: 400, message: 'el producto no existe, por favor verifique' });
			}
		}).then((err) => {
			rejc({ status: 500, message: 'Problema interno, por favor intente mas tarde' });
		});
	});
};

const deleteRequest = (id) =>{
	return new Promise((res, rejc) => {
		requestModel.destroy({ where: { id: id } }).then((response) => {
			console.log(response)
			if (response === 1) {
				res('request eliminado');
			} else {
				rejc({ status: 400, message: 'el request no existe' });
			}
		}).then((err) => {
			rejc({ status: 500, message: 'Problema interno, por favor intente mas tarde' });
		});
	});
};

module.exports = {
	deleteProducts,
	deleteRequest
};