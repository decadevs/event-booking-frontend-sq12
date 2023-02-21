import React, { useState } from 'react'
import {Typography, Card, IconButton, CardMedia, Grid, Link, Toolbar, Container, AppBar, CardContent, Stack, Box, Button} from '@mui/material'
import {PhotoCamera} from '@mui/icons-material'
import TopBar from './TopBar'
import eventPageData from './eventPage'
import FormInput from '../../components/search'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';



export const Hero = () => {
  const  [data, useData] = useState(eventPageData)
  const [visible, setVisible] = useState(12)



  const handleClick = () => {
    setVisible(prev => prev + 3)
  }

  return (
       <main >
      
      <Box position='relative' display={'flex'} justifyContent='center' alignItems={'center'}>
        <img style={{width:'100%', height:'100%'}} src='src/assets/eventImg.jpg'/>
        <Box position='absolute' width={'80%'}  top='86%'>
          {<FormInput/>}
        </Box>
        <Box position='absolute'>
          <Typography  color='white' variant='h3' left='0' right='0'> <span style={{width:'100px'}}>Connect to all the event</span> <br/> <span style={{marginLeft:'15px'}}>hapenning around you </span> </Typography>
          <Box display='flex'>
            
          <IconButton size='large' aria-label='arrow right' sx={{color:'red', marginLeft:'90px'}}>
          <Typography variant='h5'>Explore More</Typography>
            <ArrowRightAltIcon fontSize='large'/> 
          </IconButton>
        </Box>
          
      </Box>
       
      </Box>

      <Box ml='90px'><TopBar/></Box>  


    <Box sx={{marginLeft:'80px',}}>
      
        <Grid container rowSpacing={5} marginTop="5px" columnSpacing={3} >
            
            {data.slice(0, visible).map((items) => ( 
                <Grid item xs={12} sm={6} md={4} key={items.id} >
                    <Link href='event/eventId' style={{textDecoration:'none'}}>
                <Card style={{width:'330px'}} >
                  <CardMedia sx={{pt:'56.25%', height:140}} image={`${items.img}`} title='Image title'/>
                  <CardContent>
                    <Stack direction='row'>
                         <Box mr='7px'>date</Box>
                         <Stack direction='column' >
                            <Typography variant='h4' gutterBottom>{items.eventTitle}</Typography>
                            <Typography variant='h5'>{items.description}</Typography>
                         </Stack>
                    </Stack>
                  </CardContent>
                </Card>
                </Link>
                
              </Grid>
            ))} 
        </Grid>

        <Button  onClick={handleClick} variant='contained' style={{  backgroundColor: 'orangered', height:'50px', marginTop:'40px', marginBottom:'40px', marginLeft:'40%', width:'180px', fontSize:'12px'}}> Load More Events </Button>
        
      </Box>

      

    </main>
  
   
  )
}
