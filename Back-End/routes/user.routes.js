const express = require("express");
const router = express.Router();

const CheckDuplicateEmail = require("../middlewares/verify.middleware");

const { signUp, signIn } = require("../controller/user.controller");

router.post("/signup", CheckDuplicateEmail, (req, res) => {
  signUp(req.body)
    .then((user) => {
      res.status(200).json(user);
    })
    .catch((error) => {
      res.status(error.status).json(error.message);
    });
});

router.post("/signin", (req, res) => {
  const { email, password } = req.body;
  signIn(email, password)
    .then((jwt) => {
      res.status(200).json(jwt);
    })
    .catch((error) => {
      res.status(error.status).json(error.message);
    });
});

module.exports = router;
