const express = require("express");
const router = express.Router();

const authorization = require("../middlewares/authorization.middleware");
const authentication = require("../middlewares/authentication.middleware");

const find = require("../controller/Order.controller");

router.get("/find", authentication, (req, res) => {
  find(req, res);
});

module.exports = router;
