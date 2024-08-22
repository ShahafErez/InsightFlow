import { Component } from "react";
import { Link } from "react-router-dom";
import { Field, reduxForm } from "redux-form";
import validateEmails from "../../utils/validateEmails";
import SurveyField from "./SurveyField";

const FIELDS = [
  { label: "Survey Title", name: "title" },
  { label: "Subject Line", name: "subject" },
  { label: "Email Body", name: "body" },
  { label: "Recipient List", name: "emails" },
];

class SurveyForm extends Component {
  renderFields() {
    return FIELDS.map(({ label, name }) => {
      return (
        <Field
          key={name}
          component={SurveyField}
          type="text"
          label={label}
          name={name}
        />
      );
    });
  }
  render() {
    return (
      <div style={{ padding: "30px" }}>
        <form
          onSubmit={this.props.handleSubmit((values) => console.log(values))}
        >
          {this.renderFields()}
          <Link to="/surveys" className="btn-flat grey">
            Cancel
          </Link>
          <button className="btn-flat right white-text" type="submit">
            Next <i className="material-icons right">done</i>
          </button>
        </form>
      </div>
    );
  }
}

function validate(values) {
  const errors = {};

  errors.emails = validateEmails(values.emails || "");

  FIELDS.forEach(({ name }) => {
    if (!values[name]) {
      errors[name] = "You must provide a value";
    }
  });

  return errors;
}

export default reduxForm({
  validate: validate,
  form: "surveyForm",
})(SurveyForm);
