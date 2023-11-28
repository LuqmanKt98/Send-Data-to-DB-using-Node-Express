import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function ViewApplicant({ name, email, contactNumber, address, gender }) {
  return (
    <div className="container mt-5 w-50">
      <h2>View Applicant</h2>
      <div className="card shadow">
        <div className="card-body">
          <h5 className="card-title">Applicant Information</h5>
          <table className="table">
            <tbody>
              <tr>
                <th scope="row">Name</th>
                <td>{name}</td>
              </tr>
              <tr>
                <th scope="row">Email</th>
                <td>{email}</td>
              </tr>
              <tr>
                <th scope="row">Contact Number</th>
                <td>{contactNumber}</td>
              </tr>
              <tr>
                <th scope="row">Address</th>
                <td>{address}</td>
              </tr>
              <tr>
                <th scope="row">Gender</th>
                <td>{gender}</td>
              </tr>
              {/* Add more applicant information as needed */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default ViewApplicant;
