const requireLogin = require("../middlewares/requireLogin");
const stripeController = require("../controllers/stripeController");

module.exports = (app) => {
  app.post("/api/stripe", requireLogin, async (req, res, next) => {
    stripeController.handleStripeCharge(req, res, next);
  });
};
