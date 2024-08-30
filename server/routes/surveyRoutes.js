const requireLogin = require("../middlewares/requireLogin");
const requireCredits = require("../middlewares/requireCredits");
const surveysController = require("../controllers/surveysController");

module.exports = (app) => {
  app.get("/api/surveys", requireLogin, async (req, res, next) => {
    surveysController.getSurveys(req, res, next);
  });

  app.post("/api/surveys/weebhooks", (req, res, next) => {
    surveysController.reciveWeebhookResponse(req, res, next);
  });

  app.get("/api/surveys/:surveyId:/:choice", (req, res) => {
    res.send("Thanks for voting");
  });

  app.post(
    "/api/surveys",
    requireLogin,
    requireCredits,
    async (req, res, next) => {
      surveysController.addNewSurvey(req, res, next);
    }
  );
};
