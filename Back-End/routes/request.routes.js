const express = require("express");
const router = express.Router();

const authorization = require("../middlewares/authorization.middleware");
const authentication = require("../middlewares/authentication.middleware");

const {
  createRequest,
  findRequest,
  updateRequest,
  deleteRequest,
} = require("../controller/request.controller");

const Request = require("../models/Request.model");

router.post("/CreateRequest", authentication, (req, res) => {
  let data = req.body;
  data.request_date = new Date();
  data.status = "nuevo";
  createRequest(data)
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(err.status).json(err.message);
    });
});

router.get("/requests", authentication, (__, res) => {
  Request.findAll()
    .then((requests) => {
      res.status(200).json(requests);
    })
    .catch((err) => {
      res.status(500);
    });
});

router.get("/findRequest/:id", authentication, (req, res) => {
  let id = req.params.id;
  findRequest(id).then((response) => {
    res.status(200).json(response);
  });
});

router.put("/updateRequest/:id", authentication, authorization, (req, res) => {
  let id = req.params.id;
  let data = req.body;
  updateRequest(id, data)
    .then((response) => {
      res.status(200).json(response);
    })
    .catch((err) => {
      res.status(err.status).json(err.message);
    });
});

router.delete(
  "/deleteRequest/:id",
  authentication,
  authorization,
  (req, res) => {
    let id = req.params.id;
    deleteRequest(id)
      .then((response) => {
        res.status(200).json(response);
      })
      .catch((err) => {
        res.status(err.status).json(err.message);
      });
  }
);

module.exports = router;
