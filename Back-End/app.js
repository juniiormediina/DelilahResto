const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");
const cors = require("cors");

/* initializations */
const app = express();

/* Middlewares */
app.use(morgan("dev"));
app.use(helmet());
app.use(function (__, res, next) {
  res.header("Access-Control-Allow-Origin", "http://127.0.0.1:5501");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "PUT", "POST", "GET", "DELETE");
  next();
});
app.use(express.json());
app.use(cors());
app.options("*", cors());

/* Routes */
app.use("/api/users", require("./routes/user.routes"));
app.use("/api/products", require("./routes/products.routes"));
app.use("/api/request", require("./routes/request.routes"));
app.use("/api/orders", require("./routes/order.routes"));

module.exports = app;
