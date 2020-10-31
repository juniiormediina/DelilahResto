const express = require('express');
const signup = require('../../controller/signup.controller');
const router = express.Router();

router.post('/signup', (req, res) => {
	const user = req.body;
	signup(user).then((user) => {
		res.sendStatus(200).json(user);
	}).catch((err) => {
		res.status(err.status).json(err.message);
	});
});

module.exports = router;