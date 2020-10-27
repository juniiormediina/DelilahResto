const express = require('express');
// const router = express.Router();
const helmet = require('helmet');

/* initializations */
const app = express();

/* Models and database */
const database = require('./models/index');
const userModel = require('./models/user.model');
userModel.sync();
const requestModel = require('./models/requested.model');
requestModel.sync();
const productModel = require('./models/products.model');
productModel.sync();
const orderModel = require('./models/order.model');
orderModel.sync();

/* Settings */
app.set('port', process.env.PORT || 3000);

/* Middlewares */
app.use(express.json());
app.use(helmet());

/* Routes */
app.use(require('./routes/login.routes'));
app.use(require('./routes/signup.routes'));
app.use(require('./routes/products.routes'));
app.use(require('./routes/order.routes'));
app.use(require('./routes/createOrder.routes'));

/* Starting the server */
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
});
