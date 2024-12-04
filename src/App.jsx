import React, { useState } from "react";
import DynamicForm from "./DynamicForm";
import { API_RESPONSES } from "./data";

function App() {
  const [formStructure, setFormStructure] = useState(null);

  const handleDropdownChange = (event) => {
    const selectedValue = event.target.value;
    setFormStructure(API_RESPONSES[selectedValue]);
  };

  return (
    <div className="App">
      <header>
        <h1>Dynamic Form</h1>
      </header>
      <div>
        <label>Select Form Type:</label>
        <select onChange={handleDropdownChange}>
          <option value="">--Select--</option>
          <option value="userInfo">User Information</option>
          <option value="addressInfo">Address Information</option>
          <option value="paymentInfo">Payment Information</option>
        </select>
      </div>
      {formStructure && <DynamicForm formStructure={formStructure} />}
    </div>
  );
}

export default App;
