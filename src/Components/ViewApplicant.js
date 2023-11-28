import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { getApplicant } from '../Service/api';

function ViewApplicant() {
  const [applicantData, setApplicantData] = useState([]);

  useEffect(() => {
    getApplicantDetails();
  }, []);

  const getApplicantDetails = async () => {
    try {
      const result = await getApplicant();

      // Check if 'result' is defined and has a 'data' property
      if (result && result.data) {
        setApplicantData(result.data);
      } else {
        console.error('Invalid data structure in the API response:', result);
      }
    } catch (error) {
      console.error('Error fetching applicant details:', error);
    }
  }

  return (
    <div className="container mt-5 w-50">
      <h2>View Applicant</h2>
      <div className="card shadow">
        <div className="card-body">
          <h5 className="card-title">Applicant Information</h5>
          <table className="table">
            <thead>
              <tr>
                <th>Student Name</th>
                <th>Student Registration Number</th>
              </tr>
            </thead>
            <tbody>
              {applicantData.map(details => (
                <tr key={details.id}>
                  <td>{details.studentName}</td>
                  <td>{details.studentRegistrationNumber}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default ViewApplicant
