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
            rejc({ status: 500, message: "No se pudo crear la orden" });
          }
        })
        .catch((err) => {
          rejc({ status: 500, message: "vuelva a intentarlo luego" });
        });
    } else {
      rejc({ status: 400, message: "Campos enviados no validos" });
    }
  });
};

const findRequest = (id) => {
  return new Promise((res, rejc) => {
    if (!id) {
      rejc({ status: 400, message: "Faltan el id, por favor envielo" });
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
          rejc({ status: 400, message: "no se pudo encontrar los pedidos" });
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
            res("Estado de el pedido actualizado");
          } else {
            rejc({ status: 400, message: "No se Pudo actualizar tu pedido." });
          }
        })
        .catch((err) => {
          rejc({ status: 500, message: "intente de nuevo mas tarde." });
        });
    } else {
      rejc({ status: 400, message: "Campos no validos" });
    }
  });
};

const deleteRequest = (id) => {
  return new Promise((res, rejc) => {
    Request.destroy({ where: { id: id } })
      .then((response) => {
        if (response === 1) {
          res("request eliminado");
        } else {
          rejc({ status: 400, message: "el request no existe" });
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
  createRequest,
  findRequest,
  updateRequest,
  deleteRequest,
};
