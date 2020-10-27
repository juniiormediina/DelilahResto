require('dotenv').config();
const userModel = require('../models/user.model');

const signup = (data) => {
	return new Promise((res, rejc) => {
		if (!data.firstname || !data.lastname || !data.phone || !data.address || !data.email || !data.pass || !data.rol) {
			rejc({ status: 400, message: 'Faltan campos, por favor envielos' });
		} else {
			userModel.create(data).then((user) => {
				res(user);
			}).catch((err) => {
				if (err.fields.email) {
					rejc({ status: 400, message: 'Este email ya esta registrado' });
				} else {
					rejc({ status: 500, message: 'UPS!! tenemos problemas intenta de nuevo mas tarde' });
				}
			});
		}
	});
};

module.exports = signup;