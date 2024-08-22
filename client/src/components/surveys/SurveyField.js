const SurveyField = ({ input, label, meta: { error, touched } }) => {
  return (
    <div>
      <label>{label}</label>
      <input {...input} style={{ marginBottom: "5px" }} />
      <div style={{ color: "#e36101", marginBottom: "5px" }}>
        {touched && error}
      </div>
    </div>
  );
};

export default SurveyField;
