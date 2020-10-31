require('dotenv').config();
const userModel = require('../models/user.model');
const jwt = require('jsonwebtoken');

const login = (recibed_password, recibed_email) => {
	return new Promise(async (res, rejc) => {
		if (!recibed_email || !recibed_password) {
			rejc({ status: 406, message: 'Faltan campos por rellenar, por favor envie todos los campos requeridos' });
		} else {
			let user = await userModel.findOne({ where: { email: recibed_email } });
			if (user) {
				const {	dataValues: { pass }} = user;
				if (pass === recibed_password) {
					res(jwt.sign(user.dataValues, process.env.JWT_SECRET));
				} else {
					rejc({ status: 401, message: 'Usuario o contraseña invalida' });
				}
			} else {
				rejc({ status: 400, message: `el usuario con email ${recibed_email} no existe` });
			}
		}
	});
};

module.exports = login;