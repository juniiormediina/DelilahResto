const jwt = require("jsonwebtoken");
const User = require("../models/User.model");
const bcrypt = require("bcryptjs");
require("dotenv").config();

const signUp = async (data) => {
  return new Promise(async (res, rejc) => {
    if (
      !data.firstname ||
      !data.lastname ||
      !data.phone ||
      !data.address ||
      !data.email ||
      !data.profile ||
      !data.password
    ) {
      rejc({ status: 406, message: "Please fill all fields" });
    } else {
      bcrypt.hash(data.password, 10, (err, hash) => {
        if (err) {
          rejc({
            status: 500,
            message:
              "Sorry, the server has presented an error. Try again later 1",
          });
        } else {
          data.password = hash;
          User.create(data)
            .then((user) => {
              res(user);
            })
            .catch((err) => {
              rejc({
                status: 500,
                message:
                  "Sorry, the server has presented an error. Try again later 2",
              });
            });
        }
      });
    }
  });
};

const signIn = (email, password) => {
  return new Promise(async (res, rejc) => {
    if (!email || !password) {
      rejc({ status: 406, message: "Please fill all fields" });
    } else {
      let user = await User.findOne({ where: { email: email } });
      let comparePassword = await bcrypt.compare(password, user.password);
      if (user && comparePassword) {
        delete user.password;
        res(
          jwt.sign(user, process.env.JWT_SECRET, {
            expiresIn: "1h",
          })
        );
      } else {
        rejc({ status: 401, message: `Invalid password o user` });
      }
    }
  });
};

module.exports = { signUp, signIn };
