const express = require("express");
const router = express.Router();

const authorization = require("../middlewares/authorization.middleware");
const authentication = require("../middlewares/authentication.middleware");

const {
  createProduct,
  findProducts,
  updateProducts,
  deleteProducts,
} = require("../controller/product.controller");

const Product = require("../models/Product.model");

router.post("/createProducts", authentication, authorization, (req, res) => {
  const data = req.body;
  createProduct(data)
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(err.status).json(err.message);
    });
});

router.get("/productsList", authentication, (__, res) => {
  Product.findAll()
    .then((products) => {
      res.status(200).json(products);
    })
    .catch((err) => {
      res.status(500);
    });
});

router.get("/findProducts/:id", authentication, authorization, (req, res) => {
  let id = req.params.id;
  findProducts(id).then((response) => {
    res.status(200).json(response);
  });
});

router.put("/updateProducts/:id", authentication, authorization, (req, res) => {
  let id = req.params.id;
  let data = req.body;
  updateProducts(id, data)
    .then((response) => {
      res.status(200).json(response);
    })
    .catch((err) => {
      res.status(err.status).json(err.message);
    });
});

router.delete(
  "/deletePoducts/:id",
  authentication,
  authorization,
  (req, res) => {
    let id = req.params.id;
    let data = req.body;
    deleteProducts(id, data)
      .then((response) => {
        res.status(200).json(response);
      })
      .catch((err) => {
        res.status(err.status).json(err.message);
      });
  }
);

module.exports = router;
