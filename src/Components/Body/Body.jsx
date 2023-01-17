import React from 'react'
import Grid from '@mui/material/Grid'; 
import { Box, Typography, Button , Card, CardMedia} from "@mui/material";
import './Body.css';

const Body = () => {
  return (
    <div>
        <Grid container>
            <Grid item md={12}>
            <Typography variant='h4'>Exclusive beats for the next generation of artists</Typography> 
            </Grid>

            <Grid item md={12} sx={{ display: { xs: 'block', md: 'flex' } }}>
                <Box md={4}>
                <Button id='Navbtn'
              sx={{ my: 2, color: 'white', display: 'block' }}
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