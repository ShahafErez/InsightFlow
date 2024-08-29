const stripe = require("stripe")(require("../config/keys").stripeSecretKey);

const stripeService = {
  charge: async ({ amount, token }) => {
    return stripe.charges.create({
      amount,
      currency: "usd",
      source: token.id,
    });
  },
};

module.exports = stripeService;
