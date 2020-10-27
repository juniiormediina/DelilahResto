const jwt = require('jsonwebtoken');
require('dotenv').config();

const authentication = (req, res, next) =>{
    let authorization = req.headers.authorization;
    if(authorization){
        let token = authorization.split(' ')[1];
        jwt.verify(token, process.env.JWT_SECRET, (err, decoding)=>{
            if(err){
                res.status(401).json('Token invalid');
            }
            req.usuario = decoding;
            next();
        });
    }else{
        res.status(401).json('Por favor debes loguearte correctamente');
    }
}

module.exports = authentication;