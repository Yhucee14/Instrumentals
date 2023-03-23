import React from 'react'
import Grid from '@mui/material/Grid'; 
import { Box, Typography, Button, Card, CardMedia, } from "@mui/material";
import './Body.css';
import studio from '../Assets/studio.jpg';



const Body = () => {
  return (
    <div >
        <Grid container className='bodycon'> 
            <Grid item md={12} className='textcon'
            sx={{ width: "100%",}}>
              
            <Typography variant='h3'>Exclusive beats for the </Typography> 
            <Typography variant='h3'>next generation of</Typography>
            <Typography variant='h3'> artists.</Typography>
            </Grid>

            <Grid item md={12} sx={{ display: { xs: 'block', md: 'flex' } }} className='belowcon'>
                <Box md={4}>
                <Button className='explorebtn' variant='contained'
              sx={{color: 'white', bgcolor: 'black'}}
              component="a"
              href="https://www.google.com/maps/@9.0338725,8.677457,6zcv"
            >
            Explore
            </Button>
                </Box>

                <Grid container md={8}  sx={{ display: { xs: 'flex', md: 'flex' } }}>

                  <Grid item sm={4} lg={4} md={3}>
                    <Box className='onebox' >
                      <Card>
                        <CardMedia 
                        component='img'
                        height='200'
                        image= {studio}
                        alt='unsplash'
                        />
                      </Card>
                    </Box>
                  </Grid>

                  <Grid item sm={4} lg={4} md={3}>
                    <Box className='twobox' >
                      <Card>
                        <CardMedia 
                        component='img'
                        height='200'
                        image= {studio}
                        alt='unsplash'
                        />
                      </Card>
                    </Box>
                  </Grid>

                  <Grid item sm={4} lg={4} md={3}>
                    <Box className='threebox' >
                      <Card>
                        <CardMedia 
                        component='img'
                        height='200'
                        image= {studio}
                        alt='unsplash'
                        />
                      </Card>
                    </Box>
                  </Grid>

                  <Grid item sm={4} lg={4} md={3}>
                    <Box className='fourbox' >
                      <Card>
                        <CardMedia 
                        component='img'
                        height='200'
                        image= {studio}
                        alt='unsplash'
                        />
                      </Card>
                    </Box>
                  </Grid>
                </Grid>
                
            </Grid>
        </Grid>
       
    </div>
  )
}

export default Body;