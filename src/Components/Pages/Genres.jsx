import React, { Component } from 'react'
import './Pages.css'
import { Box, Card, CardContent, Typography, CardMedia, Button} from "@mui/material";
import Grid from '@mui/material/Grid';
// import Audio from '../Components/Pages/Audio'
import styled from "styled-components";
import WaveSurfer from 'wavesurfer.js';
// import loader from '../Assets/loader.png';
// import studio from '../Assets/studio.jpg';
// import last from '../Assets/last.jpg';
import plenty from '../Pages/Musicbox/plenty.jpg';

// const coverPic = [
//   last,
//   loader,
//   studio,
// ]



const data = [
  {
    songImg: plenty,
    songName: "Its Plenty",
    songGenre: "Afrobeat",
    songDetails: "125 BPM,  3:45mins",
    songPrice: "N4300",
  },
]


const WaveformContainer = styled.div`
display: block;  
align-items: center;
justify-content: center;
height: 100px;  width: 100%;
background: transparent;
`;

const Wave = styled.div`
width: 50%;
height: 90px;
`;

const PlayButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 60px;
  background: #EFEFEF;
  border-radius: 50%;
  border: none;
  outline: none;
  cursor: pointer;
  padding-bottom: 3px;
  &:hover {
    background: #DDD;
  }
`;

class Genres extends Component {

  state = {
    playing: false,
  };

  componentDidMount() {
    const tracktwo = document.querySelector('#tracktwo');

    this.wavetwo = WaveSurfer.create({
      barWidth: 1,
      cursorWidth: 1,
      container: '#wavetwo',
      backend: 'WebAudio',
      height: 40,
      progressColor: 'blue',
      responsive: true,
      waveColor: '#EFEFEF',
      cursorColor: 'transparent',
      fillParent: false,
      minPxPerSec: 15, 
    });

    this.wavetwo.load(tracktwo);     
  };


  handlePlay = () => {
    this.setState({ playing: !this.state.playing });
    this.wavetwo.playPause();
  };

     render() {

      // const urltwo = 'https://www.mfiles.co.uk/mp3-downloads/pachelbels-canon-arranged.mp3';

    
      return (
        <div className='NewContainer'>

            {data.map((value,index) => {

              return(
                <Grid container >
    
                <Grid item md={4} >
                  <div className='cardbox'>
                  <Card sx={{display: 'block', }}> 
                     
                    <Box sx={{padding: '10px', position: 'relative', }} key={index}>
                    <CardMedia square 
                    component='img'
                    height='200'
                    src= {value.songImg}   
                    alt='splash'/>
        
              <WaveformContainer className='wavecon'> 
              <PlayButton className='playbtn' onClick={this.handlePlay}> 
        
              {!this.state.playing ? 'Play' : 'Pause'}
        
              </PlayButton>
              <Wave id="wavetwo"/> 
              <audio id="tracktwo" src={plenty}/>
        
              </WaveformContainer>
                    </Box>
                  
                    <CardContent>
                    <Typography>
                          {value.songName}
                        </Typography>
                        <Typography>
                        {value.songGenre}
                        </Typography>
                        <Typography>
                        {value.songDetails}
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
                      component="a"
                      href="https://www.google.com/maps/@9.0338725,8.677457,6zcv"
                    >
                      <Typography sx={{ paddingLeft: '5px',  paddingRight: '5px',  paddingTop: '3px', paddingBottom: '3px' , }}>Add To Cart</Typography>
        
                      <Box sx={{ bgcolor: 'white', color: 'black', borderRadius: '30px', paddingLeft: '5px',  paddingRight: '5px',  paddingTop: '4px', paddingBottom: '3px'  }}>
                        <Typography>{value.songPrice}</Typography></Box>
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
    }
                
  

 
};

export default Genres;