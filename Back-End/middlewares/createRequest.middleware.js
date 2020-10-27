const requestModel = require('../models/requested.model');

const createRequest = (data) => {
	return new Promise((res, rejc) => {
		if (data.products && Array.isArray(data.products)) {
            const { products, ...request } = data;
			requestModel.create(request).then(async(request) => {
				try {
					await request.addProducts(products);
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

module.exports = createRequest;

