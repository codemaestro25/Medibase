import styled from '@emotion/styled'
import { Box, Container, Typography } from '@mui/material'
import React from 'react'
import PhotoCard from './PhotoCard'

const ParentContainer = styled(Box)`
width : 80%;
height : 200px;
margin: 100px auto;
background: #5ebedb;
overflow  : hidden;

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
  grid-template-columns: repeat(2, 1fr); /* Three columns for label-value pairs */
  align-items: center;
  justify-content: space-between;
  margin: 0px 20px; /* Centers the inner container */
  
  width: calc(100% - 20px); /* 20px is subtracted to account for padding/margin */
  max-width: 100%; /* Ensures the container doesn't exceed the parent's width */

`
const typoStyle = {
    paddingBottom : "30px"
}
const Profile = () => {
    const tre = "reveor"
  return (
    <ParentContainer>
        <InnerContainer>
            <DetailsContainer>
                <Typography sx={typoStyle}>Name : {tre}</Typography>
                <Typography sx={typoStyle}>Aadhar : </Typography>
                <Typography sx={typoStyle}>Date of Birth : </Typography>
                <Typography sx={typoStyle}>Gender : </Typography>
                <Typography sx={typoStyle}>Contact : </Typography>
                <Typography sx={typoStyle}>Address : </Typography>

            </DetailsContainer>
            {/* <i class="fa-solid fa-user fa-10x" ></i> */}
            <PhotoCard />
        </InnerContainer>
    </ParentContainer>    
  )
}

export default Profile