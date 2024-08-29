import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import validateEmails from "../../utils/validateEmails";
import SurveyField from "./SurveyField";
import formFields from "./formFields";

export default function SurveyFormCreate({ onNext, onDelete }) {
  const formValues = useSelector((state) => state.surveys.formValues);

  let { title, subject, body, recipients } = "";
  if (formValues) {
    ({ title, subject, body, recipients } = formValues);
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    clearErrors,
  } = useForm({
    defaultValues: {
      title: title,
      subject: subject,
      body: body,
      recipients: recipients,
    },
  });

  const handleRecipientsChange = (e) => {
    const value = e.target.value;
    setValue("recipients", value);
    const validationMessage = validateEmails(value);
    if (validationMessage) {
      setValue("recipients", value, { shouldValidate: true });
    } else {
      clearErrors("recipients");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onNext)}>
        {formFields.map(({ label, name }) => (
          <SurveyField
            key={name}
            label={label}
            {...register(name, {
              required: "You must provide a value",
              ...(name === "recipients" && {
                validate: {
                  validEmails: (value) =>
                    validateEmails(value) === undefined ||
                    "You must provide valid emails",
                },
              }),
            })}
            error={errors[name]?.message}
            onChange={name === "recipients" ? handleRecipientsChange : null}
          />
        ))}
        <button onClick={onDelete}>Cancel</button>
        <button className="btn btn-flat right" type="submit">
          Next
        </button>
      </form>
    </div>
  );
}
