const CustomErrors = require("../utils/CustomErrors");

module.exports = (req, res, next) => {
  if (req.user?.credits < 1 && req.session.user?.credits < 1) {
    throw new CustomErrors.Forbidden("User does not have enough credits");
  }
  next();
};
