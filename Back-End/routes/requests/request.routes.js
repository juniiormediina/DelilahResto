const express = require('express');
const router = express.Router();
const requestModel = require('../../models/request.model');
const authorization = require('../../middlewares/authorization.middleware');
const authentication = require('../../middlewares/authentication.middleware');

router.get('/requests', authentication, authorization, (__, res)=>{
    requestModel.findAll().then((requests)=>{
        res.status(200).json(requests);
    }).catch((err)=>{
        res.status(500);
    });
});


module.exports = router;