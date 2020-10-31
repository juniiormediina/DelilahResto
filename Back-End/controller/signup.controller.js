require('dotenv').config();
const userModel = require('../models/user.model');

const signup = (data) => {
	return new Promise((res, rejc) => {
		if (!data.firstname || !data.lastname || !data.phone || !data.address || !data.email || !data.pass || !data.rol) {
			rejc({ status: 406, message: 'Faltan campos por rellenar, por favor envie todos los campos requeridos' });
		} else {
			userModel.create(data).then((user) => {
				res(user);
			}).catch((err) => {
				if (err.fields.email) {
					rejc({ status: 400, message: 'Este email ya esta registrado, Si ya se encuentra registrado por favor intente iniciar sesion' });
				} else {
					rejc({ status: 500, message: 'Tenemos un problema interno, Intento de nuevo mas tarde' });
				}
			});
		}
	});
};

module.exports = signup;