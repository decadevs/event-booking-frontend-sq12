import { Box, Stack, Typography} from '@mui/material'
import React from 'react'
import MinimalSelect from './CategoryButton'
import Event from './EventButton'


const TopBar = () => {

  return (
    
      <Box sx={{marginTop:'300px'}}>
        <Box display='flex' sx={{xs:{display:'flex'}}}>
        <Typography variant='h2' marginRight='48.5%'> Upcoming Events </Typography>
        <Box display='flex' marginTop='2' sx={{gap:'30px'}}>
           <MinimalSelect/>
           <Event />
        </Box>
        </Box>
      </Box>
  )
}

export default TopBar
