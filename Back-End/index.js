const express = require('express');
const router = express.Router();
const helmet = require('helmet');

/* initializations */
const app = express();


const database = require('./models/index');


const requestModel = require('./models/requested.model');
const userModel = require('./models/user.model');
const productModel = require('./models/products.model');
const orderModel = require('./models/order.model');
userModel.sync();
requestModel.sync();
productModel.sync();
orderModel.sync();

/* Settings */
app.set('port', process.env.PORT || 3000);

/* Middlewares */
app.use(express.json());
app.use(helmet());

/* Routes */
app.use(require('./routes/login.routes'));
app.use(require('./routes/signup.routes'));

/* Starting the server */
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
});
