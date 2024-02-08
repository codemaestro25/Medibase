import React from 'react'
import { Container, styled } from '@mui/material'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Navbar from '../Navbar';
import Profile from './profile';
import RecordsTabs from './RecordsTabs'

const Overview = () => {
  var cardSize = 150
  var cardHeight  = 120
  var backcolor = "#f5cca4"
  return (
    <div>
      <Navbar />
      <Profile/>
      
      <Container fixed sx={{display: 'flex' , flexDirection : 'row', maxWidth: '600px', justifyContent: 'space-around', alignItems: 'center', marginTop: '80px'}}>
      <RecordsTabs />
      </Container>
      <Container fixed sx={{display: 'flex' , flexDirection : 'row', maxWidth: '600px', justifyContent: 'space-around', alignItems: 'center', marginTop: '80px'}}>
      <Card sx={{ maxWidth: cardSize, minHeight : cardHeight , bgcolor: backcolor}}>
      <CardActionArea>
        
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Vaccines
          </Typography>
    
        </CardContent>
      </CardActionArea>
    </Card>
      <Card sx={{ maxWidth: cardSize ,  minHeight : cardHeight , bgcolor: backcolor}}>
      <CardActionArea>
        
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" sx={{color: '#6f1fd1', textAlign: 'center'}}>
            Hospital Admits
          </Typography>
    
        </CardContent>
      </CardActionArea>
    </Card>
      <Card sx={{ maxWidth: cardSize ,  minHeight : cardHeight, bgcolor: backcolor}}>
      <CardActionArea>
        
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" sx={{color: '#371cbd', textAlign: 'center'}}>
            Clinic Visits
          </Typography>
    
        </CardContent>
      </CardActionArea>
    </Card>
      <Card sx={{ maxWidth: cardSize ,  minHeight : cardHeight,  bgcolor: backcolor}}>
      <CardActionArea>
        
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" sx={{color: '#b31e28', textAlign: 'center'}}>
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