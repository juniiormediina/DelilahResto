const express = require('express');
// const router = express.Router();
const helmet = require('helmet');

/* initializations */
const app = express();

/* Models and database */
const database = require('./models/index');
const userModel = require('./models/user.model');
userModel.sync();
const requestModel = require('./models/request.model');
requestModel.sync();
const productModel = require('./models/product.model');
productModel.sync();
const orderModel = require('./models/order.model');
orderModel.sync();

/* Settings */
app.set('port', process.env.PORT || 3000);

/* Middlewares */
app.use(express.json());
app.use(helmet());

/* Routes */
app.use(require('./routes/users/login.routes'));
app.use(require('./routes/users/signup.routes'));
app.use(require('./routes/products/products.routes'));
app.use(require('./routes/products/createProduct.routes'));
app.use(require('./routes/products/findProduct.routes'));
app.use(require('./routes/products/updateProduct.routes'));
app.use(require('./routes/products/deleteProduct.routes'));
app.use(require('./routes/requests/request.routes'));
app.use(require('./routes/requests/createRequest.routes'));
app.use(require('./routes/requests/findRequest.routes'));
app.use(require('./routes/requests/updateRequest.routes'));
app.use(require('./routes/requests/deleteRequest.routes'));
app.use(require('./routes/order.routes'));

/* Starting the server */
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
});