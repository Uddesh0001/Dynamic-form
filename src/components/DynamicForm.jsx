import React, { useState } from "react";
import ProgressBar from "./ProgressBar";

function DynamicForm({ formStructure }) {
  const [formData, setFormData] = useState({});
  const [progress, setProgress] = useState(0);

  const handleInputChange = (event, field) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });

    // Update progress bar
    const requiredFields = formStructure.fields.filter((field) => field.required).length;
    const filledFields = Object.keys(formData).filter((key) => formData[key]).length;
    setProgress((filledFields / requiredFields) * 100);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Form Submitted Successfully!");
    console.table(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <ProgressBar progress={progress} />
      {formStructure.fields.map((field) => (
        <div key={field.name}>
          <label>{field.label}</label>
          {field.type === "dropdown" ? (
            <select name={field.name} onChange={(e) => handleInputChange(e, field)} required={field.required}>
              <option value="">--Select--</option>
              {field.options.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          ) : (
            <input
              type={field.type}
              name={field.name}
              onChange={(e) => handleInputChange(e, field)}
              required={field.required}
            />
          )}
        </div>
      ))}
      <button type="submit">Submit</button>
    </form>
  );
}

export default DynamicForm;
