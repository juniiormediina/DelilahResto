const express = require('express');
const router = express.Router();
const authorization = require('../middlewares/authorization.middleware');
const authentication = require('../middlewares/authentication.middleware');
const createRequest = require('../middlewares/createRequest.middleware');

router.post('/CreateOrder', authentication, authorization, (req, res)=>{
    let data = req.body;
    data.request_date = new Date();
    data.status = 'nuevo';
    createRequest(data).then((result)=>{
        res.status(200).json(result);
    }).catch((err) => {
        res.status(err.status).json(err.message);
    });
});

module.exports = router;