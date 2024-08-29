const _ = require("lodash");
const { Path } = require("path-parser");
const { URL } = require("url");
const mongoose = require("mongoose");
const Mailer = require("../services/Mailer");
const surveyTemplate = require("../services/emailTemplates/surveyTemplate");

const Survey = mongoose.model("survey");

const surveyService = {
  getSurveysByUser: async (userId) => {
    return await Survey.find({ _user: userId }).select({
      recipients: false,
    });
  },

  reciveWeebhookResponse: (responses) => {
    const path = new Path("/api/surveys/:surveyId/:choice");

    _.chain(responses)
      .map(({ email, url }) => {
        const match = path.test(new URL(url).pathname);
        if (match) {
          return { email, surveyId: match.surveyId, choice: match.choice };
        }
      })
      .compact()
      .uniqBy((event) => `${event.email}_${event.surveyId}`)
      .each(({ surveyId, email, choice }) => {
        Survey.updateOne(
          {
            _id: surveyId,
            recipients: {
              $elemMatch: { email: email, responded: false },
            },
          },
          {
            $inc: { [choice]: 1 },
            $set: { "recipients.$.responded": true },
            lastResponded: new Date(),
          }
        ).exec();
      })
      .value();
  },

  addNewSurvey: async ({ title, subject, body, recipients }, userId) => {
    const survey = new Survey({
      title,
      subject,
      body,
      recipients: recipients
        .split(",")
        .map((email) => ({ email: email.trim() })),
      _user: userId,
      dateSent: Date.now(),
    });

    const mailer = new Mailer(survey, surveyTemplate(survey));

    // send the maill to the perticipents
    await mailer.send();
    // save information in db
    await survey.save();
  },
};

module.exports = surveyService;
