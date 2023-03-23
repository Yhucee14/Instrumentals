import React, { Component } from 'react'
import '../Pages.css'
import { Box, Card, CardContent, Typography, CardMedia, Button} from "@mui/material";
import Grid from '@mui/material/Grid';
// import Audio from '../Components/Pages/Audio'
import styled from "styled-components";
import WaveSurfer from 'wavesurfer.js';
import ye from '../ye.mp3';
import yepic from '../Musicbox/yepic.jpg'


// const cartItems = [
//   {
//     name: 'Nike',
//     price: '$100',
//     image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
//   },
//   {
//     name: 'Adidas',
//     price: '$200',
//     image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
//   },
// ]

const data = [
  {
    songImg: ye,
    songName: "Burna Boy - Ye",
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

class Boxthree extends Component {

  

  state = {
    playing: false,
  };

  componentDidMount() {
    const trackthree = document.querySelector('#trackthree');

    this.wavethree = WaveSurfer.create({
      barWidth: 1,
      cursorWidth: 1,
      container: '#wavethree',
      backend: 'WebAudio',
      progressColor: 'blue',
      responsive: true,
      waveColor: '#EFEFEF',
      cursorColor: 'transparent',
      fillParent: false,
      minPxPerSec: 15, 
    });

    this.wavethree.load(trackthree);
  };


  handlePlay = () => {
    this.setState({ playing: !this.state.playing });
    this.wavethree.playPause();
  };

  constructor(props){
    super(props);
    this.state = {
      cartItems: []
    };
  }

  

//   handleAddProduct = (value) => {
// const valueExist = this.state.cartItems.find((item) => item.id === value.id);

//     if(valueExist){
//       this.state.setCartItems(this.state.cartItems.map((item) => item.id === value.id ? 
//       {...valueExist, quantity: valueExist.quantity + 1}: item)
//       );
//     }
//       else{
//         this.state.setCartItems([...this.state.cartItems, {...value, quantity: 1}]);
//       }

  
   
//   }

  // setCartItems = (cartItems) => {
  //   this.setState({
  //     cartItems: []
  //   });
  // }


 

    render() {

      // const [cartItems, setCartItems] = useState([]);
    
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
                    src= {yepic}   
                    alt='splash'/>
        
              <WaveformContainer className='wavecon'> 
              <PlayButton className='playbtn' onClick={this.handlePlay}> 
        
              {!this.state.playing ? 'Play' : 'Pause'}
        
              </PlayButton>
              <Wave id="wavethree"/> 
              <audio id="trackthree" src={ye}/>
        
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
                      onClick={() => this.handleAddProduct(value)}
                    >
                      <Typography sx={{ paddingLeft: '5px',  paddingRight: '5px',  paddingTop: '3px', paddingBottom: '3px' , }}>Add To Carst</Typography>
        
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

export default Boxthree;