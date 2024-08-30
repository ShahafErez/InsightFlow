const surveyService = require("../services/surveyService");

const surveysController = {
  getSurveys: async (req, res, next) => {
    try {
      const surveys = await surveyService.getSurveysByUser(req.user.id);
      res.status(200).send(surveys.reverse());
    } catch (err) {
      next(err);
    }
  },

  reciveWeebhookResponse: (req, res, next) => {
    try {
      surveyService.reciveWeebhookResponse(req.body);
      res.status(200).send({});
    } catch (err) {
      next(err);
    }
  },

  addNewSurvey: async (req, res, next) => {
    try {
      await surveyService.addNewSurvey(req.body, req.user.id);
      req.user.credits -= 1;
      const user = await req.user.save();
      res.status(201).send(user);
    } catch (err) {
      next(err);
    }
  },
};

module.exports = surveysController;
