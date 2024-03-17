import React from "react";
import "./css/HospitalPage.css";
import { Link } from "react-router-dom";

const HospitalPage = () => {
  return (
    <div >
      <div className="d-flex justify-content-between">
      <div className="pageContainer">
        <h2>Data</h2>
        <Link to={"/hospitalPage/addData"}>

          <button className="pageButton">Add </button>
        </Link>
        <button className="pageButton">View</button>
      </div>
      <div className="pageContainer">
        <h2>Identify</h2>
        <Link to={"/biometricId"}>
          <button className="pageButton">Biometric </button>
        </Link>
        <Link to={"/idinput"}>
          <button className="pageButton">Unique ID</button>
        </Link>
      </div>
    </div>
    </div>
  );
};

export default HospitalPage;
