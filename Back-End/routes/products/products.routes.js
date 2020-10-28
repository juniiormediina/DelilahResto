const express = require('express');
const router = express.Router();
const productModel = require('../../models/product.model');
const authentication = require('../../middlewares/authentication.middleware');

router.get('/productsList', authentication, (req, res)=>{
    productModel.findAll().then((products)=>{
        res.status(200).json(products);
    }).catch((err)=>{
        res.status(500);
    });
});

module.exports = router;