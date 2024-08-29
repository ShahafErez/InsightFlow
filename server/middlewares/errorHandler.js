const Errors = require("../utils/CustomErrors");

function errorHandler(err, req, res, next) {
  if (err instanceof Errors.CustomErrors) {
    res.status(err.status).json({ message: err.message });
  } else {
    console.error(err);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

module.exports = errorHandler;
