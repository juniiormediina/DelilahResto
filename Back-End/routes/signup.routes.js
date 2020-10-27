const express = require('express');
const signup = require('../controller/signup.controller');
const router = express.Router();

router.post('/signup', (req, res) => {
	const reqUser = req.body;
	signup(reqUser).then((user) => {
		res.sendStatus(200).json(user);
	}).catch((error) => {
		res.status(error.status).json(error.message);
	});
});

module.exports = router;