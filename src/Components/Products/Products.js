import React from "react";
import { Box, Card, CardContent, Typography, CardMedia, Button} from "@mui/material";
import Grid from '@mui/material/Grid';
import '../Pages/Pages.css'

const Products = ({productItems, handleAddProduct}) => {


    return (
      <div className='mapcon'>
               {productItems.map((productItem) => {

return(
  <Grid container >

  <Grid item md={4} >
    <div className='cardbox'>
    <Card sx={{display: 'block', }}> 
       
      <Box sx={{padding: '10px', position: 'relative', }} >
      <CardMedia square 
      component='img'
      height='200'
      src= {productItem.image}   
      alt='splash'/>

{/* <WaveformContainer className='wavecon'> 
<PlayButton className='playbtn' onClick={this.handlePlay}> 

{!this.state.playing ? 'Play' : 'Pause'}

</PlayButton>
<Wave id="wavethree"/> 
<audio id="trackthree" src={ye}/>

</WaveformContainer> */}
      </Box>
    
      <CardContent>
      <Typography>
            {productItem.name}
          </Typography>
          <Typography>
          {productItem.genre}
          </Typography>
          <Typography>
          {productItem.details}
          </Typography> 
          <Box  sx={{ display: 'flex',justifyContent: 'space-between', }}>
          <Typography>
            Exclusive
          </Typography>
          <Typography>
            Lease
          </Typography></Box>

          <Button variant='contained'
        sx={{ bgcolor: '#3E0660', color: 'white', display: 'flex', borderRadius: '30px', }} 
        onClick={() => handleAddProduct(productItem)}
      >
        <Typography sx={{ paddingLeft: '5px',  paddingRight: '5px',  paddingTop: '3px', paddingBottom: '3px' , }}>Add To Cart</Typography>

        <Box sx={{ bgcolor: 'white', color: 'black', borderRadius: '30px', paddingLeft: '5px',  paddingRight: '5px',  paddingTop: '4px', paddingBottom: '3px'  }}>
          <Typography>{productItem.price}</Typography></Box>
      </Button>
      </CardContent>
    </Card>
    </div>
  </Grid>
  </Grid>

)

})}
       
      </div>
       
    );
  };
  
  export default Products;