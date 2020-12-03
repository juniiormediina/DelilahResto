const authorization = async (req, res, next) => {
  const { profile } = req.profile;
  if (profile !== "Administrator") {
    res
      .status(400)
      .json(
        "You don't have profiles of administrator to continue with this action"
      );
  } else {
    next();
  }
};

module.exports = authorization;
