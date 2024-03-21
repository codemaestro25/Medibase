import React from "react";
import "../css/Home.css";
import HospitalImage from "../../logins/HospitalLogin/hospital login.svg";
import UserImage from "../users.jpg";
import AdminImage from "../admin3.png";
import { Link, useNavigate } from "react-router-dom";


const Logins = () => {

  return (
    <div className="d-flex flex-column align-items-center justify-content-center">
      <h1
        className="text-uppercase my-5"
        style={{ fontFamily: "'Varela Round', sans-serif" }}
      >
        Logins
      </h1>
      <div className="homeContainer">
        <div className="d-flex align-items-center justify-content-around">
          <Link to={"/login/userLogin"}>
            <div className="left indiContainer " >
              <img
                src={UserImage}
                style={{
                  borderRadius: "18px",
                  height: "250px",
                  width: "320px",
                }}
                alt=""
                srcset=""
              />
              <h2>User Login</h2>
             
            </div>
          </Link>
          <Link to={"/login/hospital"}>
            <div className="indiContainer middle">
              <img
                src={HospitalImage}
                style={{ borderRadius: "18px", height: "70%", width: "60%" }}
                alt=""
                srcset=""
              />
              <h2>Medical Organization Login</h2>
            </div>
          </Link>
          <div className="indiContainer right">
            <img
              src={AdminImage}
              style={{ borderRadius: "18px", height: "250px", width: "320px" }}
              alt=""
              srcset=""
            />
            <h2>Admin Login</h2>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Logins;
