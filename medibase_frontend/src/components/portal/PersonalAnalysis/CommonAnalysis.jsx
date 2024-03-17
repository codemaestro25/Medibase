import React, { useContext } from "react";
import { useLocation } from "react-router-dom";
import GaugeChart from "react-gauge-chart";
import { RecordsContext } from "../../context/RecordsProvider";
import { Typography } from "@mui/material";
import "./css/commonAnalysis.css";

const CommonAnalysis = () => {
  // const { search } = useLocation();
  // const queryParams = new URLSearchParams(search);
  // const responseData = JSON.parse(decodeURIComponent(queryParams.get('responseData')));

  const { personal, testRecs } = useContext(RecordsContext);
  console.log(personal.weight / personal.height ** 2);
  console.log(personal.weight);
  console.log(personal.height);
  const BMI = personal.weight / personal.height ** 2;
  return (
    <div>
      <br />
      <h2 style={{marginX: "auto"}}>Analysis</h2>
      <div className="container">

        <GaugeChart
          id="gauge-chart2"
          nrOfLevels={26}
          percent={BMI * 100}
          hideText={true}
          textColor="#000"
          style={{ width: 250 }}
        />
        <Typography
          style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "2.5em" }}
        >
          {(BMI * 10000).toFixed(2)}
        </Typography>
        <Typography
          style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "1.5em" }}
        >
          BMI
        </Typography>
      </div>

      <div className="container hwContainer my-5">
        <div className="d-flex justify-content-between ">
          <div className="d-flex flex-column align-items-center justify-content-between">
          <i class="fa-solid fa-4x fa-scale-unbalanced-flip"></i>
            <Typography
          style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "1.5em" }}
        >
         Weight
        </Typography>
            <div
              role="progressbar"
              aria-valuenow={personal.weight}
              aria-valuemin="0"
              aria-valuemax="100"
              style={{ "--value": personal.weight }}
            ></div>
            
          </div>
          <div className="d-flex align-items-center flex-column ">
            
          <div
            role="progressbar1"
            aria-valuenow={personal.height}
            aria-valuemin="0"
            aria-valuemax="100"
            style={{ "--value":personal.height }}
          ></div>
          <i class="fa-solid fa-4x fa-up-down"></i>
          <Typography
          style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "1.5em" }}
        >
          Height
        </Typography>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommonAnalysis;
