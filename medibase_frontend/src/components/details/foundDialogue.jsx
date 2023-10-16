
import { Dialog, Typography, styled, Box } from '@mui/material'
import { ArrowBack } from '@mui/icons-material'

const dialogStyle = {
display: "flex",
flexDirection: "column",
alignItems : "center",
width: "80%",
height: "80%",
maxWidth: "60%",
maxHeight : "100%",
backgroundColor : "#3e3f40"
}

const BigText = styled(Typography)`
font-size : 3rem;
margin : 30px 0;
font-family: monospace;
`

const ParentContainer = styled(Box)`
width: 100%;

display : flex;
justify-content : space-evenly;
`

const LeftContainer = styled(Box)`
min-width : 50%;
diplay : flex;
flex-direction : column;
align-items : center;

&>*{
    padding:20px 0;
    margin-left : 40px;
    font-size : 24px;
    font-family: monospace;
}

`
const RightContainer = styled(Box)`
min-width : 50%;
diplay : flex;
flex-direction : column;
&>*{
    padding:20px 0;
    margin-left : 40px;
    font-size : 24px;
    font-family: monospace;
}

`

const FoundDialogue = (props) => {

   const {details , open ,setOpen} = props;

    const handleClose = ()=>{
        setOpen(false);
    }
  return (
   <Dialog open={open} PaperProps={{sx:dialogStyle}} hideBackdrop={true}>
    <ArrowBack onClick={handleClose} style={{position: "absolute", left : "0px", margin: "8px", fontSize:"40px"}}/>
        <BigText>Match Found!!!</BigText>
        <ParentContainer>
            <LeftContainer>
                <Typography>Name : {details.name}</Typography>
                <Typography>Age : {details.age}</Typography>
                <Typography>Blood Group :  {details.bldgp}</Typography>
                <Typography>Gender :  {details.gender}</Typography>
                <Typography>Date of Birth :  {details.dob}</Typography>
                <Typography>Address : {details.address}</Typography>
            </LeftContainer>
            <RightContainer>
            <Typography>Aadhar : {details.address}</Typography>
               
                <Typography>Mobile No : {details.mobile}</Typography>
                <Typography>Relative 1 : {details.rel1_name}</Typography>
                <Typography> R1 Mobile No : {details.rel1_mob}</Typography>
                <Typography>Relative 2 : {details.rel2_name}</Typography>
                <Typography>R2 Mobile No : {details.rel2_mob}</Typography>
            </RightContainer>
        </ParentContainer>

   </Dialog>
  )
}

export default FoundDialogue