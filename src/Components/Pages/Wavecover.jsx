import React from 'react'    
// import Genres from '../Pages/Genres';
import NewlyAdded from '../Pages/NewlyAdded'
import './Pages.css'
import { Box, Typography, Button} from "@mui/material";
import Boxthree from '../Pages/Musicbox/Boxthree';
import Boxtwo from '../Pages/Musicbox/Boxtwo';

const Wavecover = () => {
  return (
    <div className='Wavecov'>
       <Box  sx={{ color: 'black', display: 'flex',justifyContent: 'space-between', }}>
                <Typography variant='h4'>Newly Added</Typography>
                <Button
                  sx={{ color: 'black', display: 'block' }}
                  component="a"
                  href="https://www.google.com/maps/@9.0338725,8.677457,6zcv"
                >
                  See more...
                </Button>
            </Box>

            <div className='wavewrap'>
            <NewlyAdded />
        <Boxthree />
        <Boxtwo />
            </div>

       
    </div>
  )
}

export default Wavecover