const Product = require("../models/Product.model");

const createProduct = (data) => {
  return new Promise((res, rejc) => {
    Product.create(data)
      .then((response) => {
        res(response);
      })
      .catch((err) => {
        rejc({ status: 500, message: "Intentalo nuevamente" });
      });
  });
};

const findProducts = (id) => {
  return new Promise((res, rejc) => {
    if (!id) {
      rejc({ status: 400, message: "Falta el id, por favor ingreselo" });
    } else {
      Product.findAll({ where: { id: id } })
        .then(async (response) => {
          await res(response);
        })
        .catch((err) => {
          rejc({ status: 500, message: "vuelva a intentarlo luego" });
        });
    }
  });
};

const updateProducts = (id, data) => {
  return new Promise((res, rejc) => {
    Product.update(data, { where: { id: id } })
      .then((response) => {
        if (response[0] === 1) {
          res("Producto actualizado");
        } else {
          rejc({
            status: 400,
            message: "No se pudo actualizar la informacion del producto",
          });
        }
      })
      .catch((err) => {
        rejc({ status: 500, message: "vuelva a intentarlo luego" });
      });
  });
};

const deleteProducts = (id) => {
  return new Promise((res, rejc) => {
    Product.destroy({ where: { id: id } })
      .then((response) => {
        if (response === 1) {
          res("producto eliminado");
        } else {
          rejc({
            status: 400,
            message: "el producto no existe, por favor verifique",
          });
        }
      })
      .then((err) => {
        rejc({
          status: 500,
          message: "Problema interno, por favor intente mas tarde",
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
