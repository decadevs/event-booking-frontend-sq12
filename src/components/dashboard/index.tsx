import React, {useContext} from "react"
import {styled} from '@mui/system'
import {Box} from '@mui/material'


const Container = styled('div')(({ theme }) => ({
    color: theme.palette.secondary.main,
    backgroundColor: theme.palette.primary.main,
    padding: theme.spacing(1),
    borderRadius: theme.shape.borderRadius,
  }));

export const Dasboard: React.FC = () => {
   const user = import.meta.env.VITE_SOME_KEY
return (
    <Container>
        <h2> Hello  {user} </h2>
        <Box sx={{color:(theme) => theme.palette.secondary.main }}> Hello People </Box>
        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa facere id omnis fuga, 
            asperiores neque nemo accusamus? Odit, voluptatum dignissimos.</p>
       
    </Container>
)
}