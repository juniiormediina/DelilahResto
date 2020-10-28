const express = require('express');
const router = express.Router();
const authorization = require('../../middlewares/authorization.middleware');
const authentication = require('../../middlewares/authentication.middleware');
const { updateProducts } = require('../../controller/update.controller');

router.put('/updateProducts/:id', authentication, authorization, (req, res) =>{
    let id = req.params.id;
    let data = req.body;
    updateProducts(id, data).then((response)=>{
        res.status(200).json(response);
    }).catch((err)=>{
        res.status(err.status).json(err.message);
    });
});

module.exports = router;