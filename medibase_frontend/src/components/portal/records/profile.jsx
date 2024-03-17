import styled from '@emotion/styled'
import { Box, Container, Typography } from '@mui/material'
import React, { useContext } from 'react'
import PhotoCard from './PhotoCard'
import { RecordsContext } from '../../context/RecordsProvider'


const ParentContainer = styled(Box)`
@import url('https://fonts.googleapis.com/css?family=Varela+Round');
width : 80%;
height : 250px;
margin: 40px auto;
background: #fff;
overflow  : hidden;
border-radius : 8px;
box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
font-family: 'Varela Round', sans-serif;

`
const InnerContainer = styled(Container)`
display: flex;
align-items : center;
justify-content : space-around;
margin : 20px 0px;
padding : 0 20px
flex-wrap : wrap;
`

const DetailsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr); /* Three columns for label-value pairs */
  align-items: center;
  grid-column-gap: 1px; /* Adjust this value to reduce the gap between columns */

  margin: 0px;
  width: calc(100% - 0px);
  max-width: 50%;
`;

const typoStyle = {
    paddingBottom : "30px",
    
}
const Profile = () => {
    const {personal} = useContext(RecordsContext)
    const details = personal;
  return (
    <ParentContainer>
        <InnerContainer>
            <DetailsContainer>
      
                <Typography sx={typoStyle}>Aadhar : </Typography>
                <Typography sx={typoStyle}>{details.aadhar} </Typography>
                <Typography sx={typoStyle}>Date of Birth :  </Typography>
                <Typography sx={typoStyle}>{details.dob} </Typography>
                <Typography sx={typoStyle}>Gender : </Typography>
                <Typography sx={typoStyle}>{details.gender} </Typography>
                <Typography sx={typoStyle}>Contact : </Typography>
                <Typography sx={typoStyle}>{details.mobile} </Typography>
                <Typography sx={typoStyle}>Address : </Typography>
                <Typography sx={typoStyle}>{details.address}</Typography>
                <Typography sx={typoStyle}>Blood Group : </Typography>
                <Typography sx={typoStyle}>{details.bldgp} </Typography>

            </DetailsContainer>
            {/* <i class="fa-solid fa-user fa-10x" ></i> */}
            <PhotoCard name = {details.name} photo = {details.photo}/>
        </InnerContainer>
    </ParentContainer>    
  )
}

export default Profile