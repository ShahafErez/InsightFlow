import React from "react";

const SurveyField = React.forwardRef(({ label, error, ...input }, ref) => {
  return (
    <div className="mb-3">
      <label className="form-label">{label}</label>
      <input
        {...input}
        ref={ref}
        style={{ marginBottom: "5px" }}
        className="form-control"
      />
      {error && (
        <div style={{ color: "#e36101", marginBottom: "5px" }}>{error}</div>
      )}
    </div>
  );
});

export default SurveyField;
