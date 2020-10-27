const express = require('express');
const router = express.Router();
const orderModel = require('../models/order.model');
const authorization = require('../middlewares/authorization.middleware');
const authentication = require('../middlewares/authentication.middleware');

router.get('/orders', authentication, authorization, (__, res)=>{
    orderModel.findAll().then((orders)=>{
        res.status(200).json(orders);
    }).catch((err)=>{
        res.status(500);
    });
});


module.exports = router;