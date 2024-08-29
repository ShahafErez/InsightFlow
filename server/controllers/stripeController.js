const stripeService = require("../services/stripeService");

const stripeController = {
  handleStripeCharge: async (req, res, next) => {
    try {
      const charge = await stripeService.charge(req.body);
      req.user.credits += charge.amount / 100;
      const user = await req.user.save();
      res.status(201).send(user);
    } catch (err) {
      next(err);
    }
  },
};

module.exports = stripeController;
