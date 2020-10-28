const express = require('express');
const router = express.Router();
const authorization = require('../../middlewares/authorization.middleware');
const authentication = require('../../middlewares/authentication.middleware');
const { createProduct } = require('../../controller/create.controller');

router.post('/createProducts', authentication, authorization, (req, res)=>{
    const data = req.body;
    createProduct(data).then((result)=>{
        res.status(200).json(result);
    }).catch((err)=>{
        res.status(err.status).json(err.message);
    });
});

module.exports = router;