import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-danger">
      <div className="container-fluid">
        <Link to="/AddApplicants" className="ms-auto me-2 navbar-brand text-decoration-none">
          Add Applicant
        </Link>
        <Link to="/ViewApplicants" className=" me-auto px-5 navbar-brand text-decoration-none">
          View Applicants
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
