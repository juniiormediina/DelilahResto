const express = require('express');
const login = require('../controller/login.controller');
// const authentication = require('../middlewares/authentication.middleware');
// const authorization = require('../middlewares/authorization.middleware');
//importar el middleware correcto
const router = express.Router();

router.post('/login', (req, res) => {
	const { password, email } = req.body;
	login(password, email).then((jwt) => {
		res.status(200).json(jwt);
	}).catch((error) => {
		res.status(error.status).json(error.message);
	});
});

module.exports = router;