import React, { Component } from 'react'
import './Pages.css'
import { Box, Card, CardContent, Typography, CardMedia, Button} from "@mui/material";
import Grid from '@mui/material/Grid';
// import Audio from '../Components/Pages/Audio'
import styled from "styled-components";
import WaveSurfer from 'wavesurfer.js';
import loader from '../Assets/loader.png';

const data = [
  {
    songImg: "../Assets/loader.png",
    songName: "Last Last",
    songGenre: "Afrobeat",
    songDetails: "125 BPM,  3:45mins",
    songPrice: "N4000",
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

class NewlyAdded extends Component {

  state = {
    playing: false,
  };

  componentDidMount() {
    const track = document.querySelector('#track');

    this.waveform = WaveSurfer.create({
      barWidth: 1,
      cursorWidth: 1,
      container: '#waveform',
      backend: 'WebAudio',
      height: 40,
      progressColor: 'blue',
      responsive: true,
      waveColor: '#EFEFEF',
      cursorColor: 'transparent',
      fillParent: false,
      minPxPerSec: 15, 
    });

    this.waveform.load(track);
  };

  handlePlay = () => {
    this.setState({ playing: !this.state.playing });
    this.waveform.playPause();
  };


    render() {

      const url = 'https://www.mfiles.co.uk/mp3-downloads/gs-cd-track2.mp3';

    
      return (
        <div className='NewContainer'>
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


            {data.map((value,index) => {
              return(
                <Grid container>
    
                <Grid item md={4}>
                  <Box className='cardbox'>
                  <Card sx={{display: 'block', }}>
                     
                    <Box sx={{padding: '10px', position: 'relative', }} key={index}>
                    <CardMedia className='cardmed'
                    component='img'
                    height='200'
                    src= {loader}
                    alt='splash'/>
        
              <WaveformContainer className='wavecon'> 
              <PlayButton className='playbtn' onClick={this.handlePlay}> 
        
              {!this.state.playing ? 'Play' : 'Pause'}
        
              </PlayButton>
              <Wave id="waveform"/> 
              <audio id="track" src={url}/>
        
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
                  </Box>
                </Grid>
    
                </Grid>

              )
        
      })}

        </div>
      );
    }
                
  

 
};

export default NewlyAdded;