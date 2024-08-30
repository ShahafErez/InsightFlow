const surveyService = require("../services/surveyService");

const surveysController = {
  getSurveys: async (req, res, next) => {
    try {
      const userId = req.user?.id || req.session.user?._id;
      const surveys = await surveyService.getSurveysByUser(userId);
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
      const userId = req.user?.id || req.session.user?._id;
      await surveyService.addNewSurvey(req.body, userId);
      req.user ? (req.user.credits -= 1) : (req.session.user.credits -= 1);
      const user = await req.user.save();
      res.status(201).send(user);
    } catch (err) {
      next(err);
    }
  },
};

module.exports = surveysController;
