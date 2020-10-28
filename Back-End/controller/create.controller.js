const requestModel = require('../models/request.model');
const productModel = require('../models/product.model');

const createRequest = (data) => {
	return new Promise((res, rejc) => {
		if (data.products && Array.isArray(data.products)) {
            const { products, ...request } = data;
			requestModel.create(request).then(async(request) => {
				try {
					products.forEach(async(product) => {
						await request.addProducts(product.id, { through: { quantity: product.quantity } });
					});
					res(request);
				} catch (error) {
					console.log(request.id);
					await requestModel.destroy({ where: { id: request.id } });
					rejc({ status: 500, message: 'No se pudo crear la orden' });
				}
			}).catch((error) => {
				console.log(error);
			});
		} else {
			rejc({ status: 400, message: 'Campos enviados no validos' });
        }
	});
};

const createProduct = (data) => {
	return new Promise((res, rejc)=>{
		productModel.create(data).then((response)=>{
			res(response);
		}).catch((err)=>{
			rejc({ status: 500, message: 'Intentalo nuevamente' });
		});
	});
};

module.exports = {
	createRequest,
	createProduct
};