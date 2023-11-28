import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { addapplicant } from "../Components/../Service/api";

function AddApplicant() {
  // State to store form input values
  const [applicantData, setApplicantData] = useState({
    studentName: "",
    studentRegistrationNumber: "",
  });

  // Handle form input changes
  const handleChange = (e) => {
    setApplicantData({
      ...applicantData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addapplicant(applicantData);
    console.log("Form Data:", applicantData);
  };

  return (
    <div className="container w-50 mt-5 mb-5 shadow p-3 mb-5 bg-white rounded">
      <h2>Add Applicant</h2>
      <form>
        <div className="mb-3">
          <label htmlFor="studentName" className="form-label">
            Student Name
          </label>
          <input
            type="text"
            className="form-control"
            id="studentName"
            name="studentName" // Add name attribute
            onChange={(e) => handleChange(e)}
            required
          />

          <label htmlFor="studentRegistrationNumber" className="form-label">
            Student Registration Number
          </label>
          <input
            type="text"
            className="form-control"
            id="studentRegistrationNumber"
            name="studentRegistrationNumber" // Add name attribute
            onChange={(e) => handleChange(e)}
            required
          />
        </div>

        <button
          type="button"
          className="btn btn-danger form-control"
          onClick={(e) => handleSubmit(e)}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default AddApplicant;
