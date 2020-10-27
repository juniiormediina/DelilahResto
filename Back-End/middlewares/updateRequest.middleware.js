


const updateRequest = (id, data) => {
	return new Promise((res, rejc) => {
		if (data.hasOwnProperty('state') && id) {
			requestModel
				.update({ state: data.state }, { where: { id: id } })
				.then((response) => {
					if (response[0] === 1) {
						res('Estado de el pedido actualizado');
					} else {
						rejc({ status: 400, message: 'No se Pudo actualizar tu pedido.' });
					}
				})
				.catch((error) => {
					rejc({ status: 500, message: 'intente de nuevo mas tarde.' });
				});
		} else {
			rejc({ status: 400, message: 'Campos no validos' });
		}
	});
};


module.exports = updateRequest;