const express = require('express');
const router = express.Router();
const login = require('../../controller/login.controller');

router.post('/login', (req, res) => {
	const { password, email } = req.body;
	login(password, email).then((jwt) => {
		res.status(200).json(jwt);
	}).catch((err) => {
		res.status(err.status).json(err.message);
	});
});

module.exports = router;