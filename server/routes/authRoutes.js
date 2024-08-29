const passport = require("passport");
const usersController = require("../controllers/usersController");

module.exports = (app) => {
  app.get(
    "/auth/google",
    passport.authenticate("google", {
      scope: ["profile", "email"],
    })
  );

  app.get(
    "/auth/google/callback",
    passport.authenticate("google"),
    (req, res) => {
      res.redirect("/");
    }
  );

  app.post("/api/auth/logout", (req, res, next) => {
    usersController.logout(req, res, next);
  });

  app.get("/api/auth/current_user", (req, res, next) => {
    usersController.getCurrentUser(req, res, next);
  });
};
