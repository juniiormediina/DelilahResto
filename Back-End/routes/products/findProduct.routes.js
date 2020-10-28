const express = require('express');
const router = express.Router();
const authorization = require('../../middlewares/authorization.middleware');
const authentication = require('../../middlewares/authentication.middleware');
const { findProducts } = require('../../controller/find.controller');

router.get('/findProducts/:id', authentication, authorization, (req, res)=>{
    let id = req.params.id;
    findProducts(id).then((response)=>{
        res.status(200).json(response);
    });
});

module.exports = router;