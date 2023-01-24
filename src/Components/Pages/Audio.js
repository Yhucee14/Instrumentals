import React,  { Component } from 'react';
import styled from "styled-components";
import WaveSurfer from 'wavesurfer.js';
import './Pages.css'

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


class Audio extends Component {

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
      <WaveformContainer> 
      <PlayButton onClick={this.handlePlay}> 
      {!this.state.playing ? 'Play' : 'Pause'}
      </PlayButton>
      <Wave id="waveform"/> 
      <audio id="track" src={url}/>

      </WaveformContainer>
    );
  }
};

export default Audio;

