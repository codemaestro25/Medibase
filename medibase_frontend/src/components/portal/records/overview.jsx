import React from 'react'
import { Button, Container, styled } from '@mui/material'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Navbar from '../Navbar';
import Profile from './profile';
import RecordsTabs from './RecordsTabs'
import { useNavigate} from 'react-router-dom'




const Overview = () => {
  const navigate = useNavigate();
  var cardSize = 150
  var cardHeight  = 140
  var backcolor = "#33091f"

  const handlePersonalAnalysis = () =>{
        
      navigate(`/commonAnalysis`);
   
    
    }

  return (
    <div>
      <Navbar />
      <Profile/>
      <Button onClick={handlePersonalAnalysis}>Analyze</Button>
      <Container fixed sx={{display: 'flex' , flexDirection : 'row', maxWidth: '600px', justifyContent: 'space-around', alignItems: 'center', marginTop: '80px'}}>
      <RecordsTabs />
      </Container>
      <Container fixed sx={{display: 'flex' , flexDirection : 'row', maxWidth: '600px', justifyContent: 'space-around', alignItems: 'center', marginTop: '80px'}}>
      <Card sx={{ maxWidth: cardSize, minHeight : cardHeight , bgcolor: backcolor}}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" sx={{color: "#fff", textAlign: "center" , display: "flex", flexDirection: "column"}}>
          <i class="fa-solid fa-syringe"></i>
            Vaccines
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
      <Card sx={{ maxWidth: cardSize ,  minHeight : cardHeight , bgcolor: backcolor}}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" sx={{color: '#fff', textAlign: 'center' , display: "flex", flexDirection: "column"}}>
          <i class="fa-solid fa-hospital"></i>
            Hospital Admits
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
      <Card sx={{ maxWidth: cardSize ,  minHeight : cardHeight, bgcolor: backcolor}}>
      <CardActionArea>  
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" sx={{color: '#fff', textAlign: 'center', display: "flex", flexDirection: "column"}}>
          <i class="fa-solid fa-user-doctor"></i>
            Clinic Visits
          </Typography>    
        </CardContent>
      </CardActionArea>
    </Card>
      <Card sx={{ maxWidth: cardSize ,  minHeight : cardHeight,  bgcolor: backcolor}}>
      <CardActionArea>
        
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" sx={{color: '#fff', textAlign: 'center' , display: "flex", flexDirection: "column"}}>
          <i class="fa-solid fa-vial-virus"></i>
           Medical Tests 
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
      </Container>
    </div>
  )
}

export default Overview