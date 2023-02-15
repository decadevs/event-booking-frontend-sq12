import React, { useState } from 'react'
import {Typography, Card, CardMedia, Grid, Link, Toolbar, Container, AppBar, CardContent, Stack, Box, Button} from '@mui/material'
import {PhotoCamera} from '@mui/icons-material'
import TopBar from './TopBar'
import eventPageData from './eventPage'
import PaginationButton from './PaginationButton'





export const Hero = () => {
  const  [data, useData] = useState(eventPageData)
  const [visible, setVisible] = useState(12)



  const handleClick = () => {
    setVisible(prev => prev + 3)
  }



  return (
    <main>
      <Container maxWidth='lg'>
      <TopBar/>
        <Grid container spacing={4} marginTop="5px">
            
            {data.slice(0, visible).map((items) => ( 
                <Grid item xs={12} sm={6} md={4} key={items.id}>
                    <Link href='event/eventId' style={{textDecoration:'none'}}>
                <Card sx={{md:{width:'40px'}}}>
                  <CardMedia sx={{pt:'56.25%', height:140}} image={`${items.img}`} title='Image title'/>
                  <CardContent sx={{flexGrow: 1}}>
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

        <Button onClick={handleClick} variant='contained' style={{backgroundColor: 'orangered', height:'50px', marginTop:'40px', marginLeft:'470px', width:'180px', fontSize:'12px'}}> Load More Events </Button>
      
      </Container>
    

    </main>
  )
}
