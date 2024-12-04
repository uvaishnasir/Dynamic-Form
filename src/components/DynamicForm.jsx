import React, { useState } from "react";
import apiResponses from "../formApiData";

const DynamicForm = () => {
  const [formType, setFormType] = useState("");
  const [formFields, setFormFields] = useState([]);
  const [formData, setFormData] = useState({});
  const [formErrors, setFormErrors] = useState({});

  const handleFormTypeChange = (e) => {
    const selectedForm = e.target.value;
    setFormType(selectedForm);

    if (apiResponses[selectedForm]) {
      setFormFields(apiResponses[selectedForm].fields);
      setFormData({});
      setFormErrors({});
    }
  };

  const handleInputChange = (e, field) => {
    const { name, value, type, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "file" ? files[0] : value,
    }));

    if (field.required && value.trim() !== "") {
      setFormErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let isValid = true;
    const errors = {};

    formFields.forEach((field) => {
      if (field.required && !formData[field.name]) {
        isValid = false;
        errors[field.name] = `${field.label} is required.`;
      }
    });

    if (isValid) {
      alert("Form submitted successfully!");
      console.log("Submitted Data:", formData);
    } else {
      setFormErrors(errors);
    }
  };

  return (
    <div>
      <h1>Dynamic Form</h1>

      <label htmlFor="formType">Select Form Type:</label>
      <select id="formType" value={formType} onChange={handleFormTypeChange}>
        <option value="">-- Select --</option>
        <option value="userInfo">User Information</option>
        <option value="addressInfo">Address Information</option>
        <option value="paymentInfo">Payment Information</option>
        <option value="employmentApplication">Employment Application</option>
        <option value="surveyForm">Survey Form</option>
        <option value="productFeedback">Product Feedback</option>
      </select>

      {formFields.length > 0 && (
        <form onSubmit={handleSubmit}>
          {formFields.map((field) => (
            <div key={field.name}>
              <label htmlFor={field.name}>{field.label}:</label>

              {["text", "email", "password", "number", "date"].includes(field.type) ? (
                <input
                  type={field.type}
                  id={field.name}
                  name={field.name}
                  value={formData[field.name] || ""}
                  onChange={(e) => handleInputChange(e, field)}
                  required={field.required}
                />
              ) : field.type === "dropdown" ? (
                <select
                  id={field.name}
                  name={field.name}
                  value={formData[field.name] || ""}
                  onChange={(e) => handleInputChange(e, field)}
                  required={field.required}
                >
                  <option value="">-- Select --</option>
                  {field.options.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              ) : field.type === "file" ? (
                <input
                  type="file"
                  id={field.name}
                  name={field.name}
                  onChange={(e) => handleInputChange(e, field)}
                  required={field.required}
                />
              ) : null}

              {formErrors[field.name] && <p style={{ color: "red" }}>{formErrors[field.name]}</p>}
            </div>
          ))}

          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
};

export default DynamicForm;
