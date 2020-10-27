



const findRequest = (reqid) => {
	return new Promise((res, rejc) => {
		if (!reqid) {
			rejc({ status: 400, message: 'Faltan el id, por favor envielo' });
		} else {
			requestModel
				.findAll({ where: { id: reqid }, include: [productModel, userModel], raw: true, nest: true })
				.then((response) => {
					console.log(response);
				})
				.catch((error) => {
					console.log(error);
				});
		}
	});
};


module.exports = findRequest;