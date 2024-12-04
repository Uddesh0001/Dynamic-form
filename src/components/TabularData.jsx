import React from "react";

function TabularData({ submittedData }) {
  return (
    <table>
      <thead>
        <tr>
          {Object.keys(submittedData[0] || {}).map((key) => (
            <th key={key}>{key}</th>
          ))}
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {submittedData.map((data, index) => (
          <tr key={index}>
            {Object.values(data).map((value, idx) => (
              <td key={idx}>{value}</td>
            ))}
            <td>
              <button>Edit</button>
              <button>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default TabularData;
