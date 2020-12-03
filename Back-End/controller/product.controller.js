const Product = require("../models/Product.model");

const createProduct = (data) => {
  return new Promise((res, rejc) => {
    Product.create(data)
      .then((response) => {
        res(response);
      })
      .catch((err) => {
        rejc({
          status: 500,
          message: "Sorry, the server has presented an error. Try again later",
        });
      });
  });
};

const findProducts = (id) => {
  return new Promise((res, rejc) => {
    if (!id) {
      rejc({ status: 406, message: "Please fill all fields" });
    } else {
      Product.findAll({ where: { id: id } })
        .then(async (response) => {
          await res(response);
        })
        .catch((err) => {
          rejc({
            status: 500,
            message:
              "Sorry, the server has presented an error. Try again later",
          });
        });
    }
  });
};

const updateProducts = (id, data) => {
  return new Promise((res, rejc) => {
    Product.update(data, { where: { id: id } })
      .then((response) => {
        if (response[0] === 1) {
          res("Updated product");
        } else {
          rejc({
            status: 404,
            message: "Product information could not be updated",
          });
        }
      })
      .catch((err) => {
        rejc({
          status: 500,
          message: "Sorry, the server has presented an error. Try again later",
        });
      });
  });
};

const deleteProducts = (id) => {
  return new Promise((res, rejc) => {
    Product.destroy({ where: { id: id } })
      .then((response) => {
        if (response === 1) {
          res("Product removed");
        } else {
          rejc({
            status: 404,
            message: "the product does not exist, please check",
          });
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
  createProduct,
  findProducts,
  updateProducts,
  deleteProducts,
};
