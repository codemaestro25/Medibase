import React, { useContext } from 'react'
import { useLocation } from 'react-router-dom'
import GaugeChart from 'react-gauge-chart';
import {RecordsContext} from '../../context/RecordsProvider';
import { Typography } from '@mui/material';

const CommonAnalysis = () => {
  // const { search } = useLocation();
  // const queryParams = new URLSearchParams(search);
  // const responseData = JSON.parse(decodeURIComponent(queryParams.get('responseData')));


  const {personal, testRecs} = useContext(RecordsContext);
  console.log(personal.weight / (personal.height)**2);
  console.log(personal.weight);
  console.log(personal.height);
  const BMI = personal.weight / (personal.height)**2
  return (
    <div>CommonAnalysis
      <br />
      
      <GaugeChart id="gauge-chart2" 
      nrOfLevels={26} 
      percent={BMI*100}
      hideText= {true}  
      textColor='#000'
      style={{width:250}}
      />
      <Typography>{(BMI*10000).toFixed(2)}</Typography>
      

    </div>
  )
}

export default CommonAnalysis