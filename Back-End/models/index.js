const Sequelize = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize('delilah_resto', process.env.USER, process.env.PASS,{
    host: 'localhost',
    dialect: 'mysql'
});

sequelize.authenticate()
    .then(()=>{
        console.log('DB is connected');
    }).catch(err => {
        console.log('DB is no connected');
    });

module.exports = sequelize;