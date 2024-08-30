const CustomErrors = require("../utils/CustomErrors");

module.exports = (req, res, next) => {
  if (!req.user) {
    throw new CustomErrors.Unauthorized("No user logged in");
  }
  next();
};
