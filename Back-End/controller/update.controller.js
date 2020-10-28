const requestModel = require('../models/request.model');
const productModel = require('../models/product.model');

const updateRequest = (id, data) => {
	return new Promise((res, rejc) => {
		if (data.hasOwnProperty('status') && id) {
			requestModel.update({ status: data.status }, { where: { id: id } }).then((response) => {
				if (response[0] === 1) {
					res('Estado de el pedido actualizado');
				} else {
					rejc({ status: 400, message: 'No se Pudo actualizar tu pedido.' });
				}
			}).catch((err) => {
				rejc({ status: 500, message: 'intente de nuevo mas tarde.' });
			});
		} else {
			rejc({ status: 400, message: 'Campos no validos' });
		}
	});
};

const updateProducts = (id, data) => {
	return new Promise((res, rejc)=>{
		productModel.update(data, { where: { id: id } }).then((response) =>{
			if(response[0] === 1){
				res('Producto actualizado');
			}else{
				rejc({ status: 400, message: 'No se pudo actualizar la informacion del producto' });
			}
		}).catch((err)=>{
			rejc({ status: 500, message: 'vuelva a intentarlo luego' });
		});
	});
};

module.exports = {
	updateRequest,
	updateProducts
};