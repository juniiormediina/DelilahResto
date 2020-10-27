const express = require('express');
const authentication = require('../middlewares/authentication.middleware');
//importar el middleware correcto
const router = express.Router();
const productsModel = require('../models/products.model');

router.get('/productsList', authentication, (req, res)=>{
    productsModel.findAll().then((products)=>{
        res.status(200).json(products);
    }).catch((err)=>{
        res.status(500);
    });
});

module.exports = router;