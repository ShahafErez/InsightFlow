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

  app.get("/api/auth/current_user", (req, res, next) => {
    console.log("getting current user");
    usersController.getCurrentUser(req, res, next);
  });

  app.post("/register", (req, res, next) => {
    usersController.register(req, res, next);
  });

  app.post("/login", (req, res, next) => {
    usersController.login(req, res, next);
  });

  app.post("/api/auth/logout", (req, res, next) => {
    usersController.logout(req, res, next);
  });
};
