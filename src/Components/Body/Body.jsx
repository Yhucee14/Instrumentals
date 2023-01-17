import React from 'react'
import Grid from '@mui/material/Grid'; 
import { Box, Typography, Button } from "@mui/material";
import './Body.css';

const Body = () => {
  return (
    <div >
        <Grid container className='bodycon'>
            <Grid item md={12} className='textcon'
            sx={{ width: "100%",}}>
              
            <Typography variant='h3'>Exclusive beats for the </Typography> 
            <Typography variant='h3'>next generation of</Typography>
            <Typography variant='h3'> artists</Typography>
            </Grid>

            <Grid item md={12} sx={{ display: { xs: 'block', md: 'flex' } }} className='belowcon'>
                <Box md={4}>
                <Button className='explorebtn' variant='contained'
              sx={{color: 'white'}}
              component="a"
              href="https://www.google.com/maps/@9.0338725,8.677457,6zcv"
            >
            Explore
            </Button>
                </Box>

                <Box md={8}  sx={{ display: { xs: 'flex', md: 'flex' } }}>
                    <div>she gah me so high</div>
                    <div>she gah me so high</div>
                    <div>she gah me so high</div>
                    <div>she gah me so high</div>
                </Box>
                
            </Grid>
        </Grid>
    </div>
  )
}

export default Body