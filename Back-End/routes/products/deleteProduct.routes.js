const express = require('express');
const router = express.Router();
const authorization = require('../../middlewares/authorization.middleware');
const authentication = require('../../middlewares/authentication.middleware');
const { deleteProducts }  = require('../../controller/delete.controller');

router.delete('/deletePoducts/:id', authentication, authorization, (req, res) => {
	let id = req.params.id;
	let data = req.body;
	deleteProducts(id, data).then((response) => {
		res.status(200).json(response);
	}).catch((err) => {
		res.status(err.status).json(err.message);
	});
});

module.exports = router;