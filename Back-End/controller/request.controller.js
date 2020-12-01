const Request = require("../models/Request.model");
const Product = require("../models/Product.model");
const User = require("../models/User.model");

const createRequest = (data) => {
  return new Promise((res, rejc) => {
    if (data.products && Array.isArray(data.products)) {
      const { products, ...request } = data;
      Request.create(request)
        .then(async (request) => {
          try {
            products.forEach(async (product) => {
              await request.addProducts(product.id, {
                through: { quantity: product.quantity },
              });
            });
            res(request);
          } catch (err) {
            await Request.destroy({ where: { id: request.id } });
            rejc({ status: 500, message: "The request could not be created" });
          }
        })
        .catch((err) => {
          rejc({
            status: 500,
            message:
              "Sorry, the server has presented an error. Try again later",
          });
        });
    } else {
      rejc({ status: 400, message: "Invalid fields" });
    }
  });
};

const findRequest = (id) => {
  return new Promise((res, rejc) => {
    if (!id) {
      rejc({ status: 400, message: "Please fill all fields" });
    } else {
      Request.findAll({
        where: { id: id },
        include: [Product, User],
        raw: true,
        nest: true,
      })
        .then(async (response) => {
          await res(response);
        })
        .catch((err) => {
          rejc({ status: 400, message: "Request could not be found" });
        });
    }
  });
};

const updateRequest = (id, data) => {
  return new Promise((res, rejc) => {
    if (data.hasOwnProperty("status") && id) {
      Request.update({ status: data.status }, { where: { id: id } })
        .then((response) => {
          if (response[0] === 1) {
            res("Updated order status");
          } else {
            rejc({ status: 400, message: "Could not update your request." });
          }
        })
        .catch((err) => {
          rejc({
            status: 500,
            message:
              "Sorry, the server has presented an error. Try again later",
          });
        });
    } else {
      rejc({ status: 400, message: "Invalid fields" });
    }
  });
};

const deleteRequest = (id) => {
  return new Promise((res, rejc) => {
    Request.destroy({ where: { id: id } })
      .then((response) => {
        if (response === 1) {
          res("request deleted");
        } else {
          rejc({ status: 400, message: "The request does not exist" });
        }
      })
      .then((err) => {
        rejc({
          status: 500,
          message: "Sorry, the server has presented an error. Try again later",
        });
      });
  });
};

module.exports = {
  createRequest,
  findRequest,
  updateRequest,
  deleteRequest,
};
