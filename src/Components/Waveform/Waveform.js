import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import WaveSurfer from 'wavesurfer.js';
import styled from 'styled-components';
import { FaPlayCircle, FaPauseCircle } from 'react-icons/fa';
import '../Pages/Pages.css'

const Waveform = ({ audio, productItems }) => {
  const containerRef = useRef();
  const waveSurferRef = useRef({
    isPlaying: () => false,
  });
  const [isPlaying, toggleIsPlaying] = useState(false);

  useEffect(() => {
    const waveSurfer = WaveSurfer.create({
      container: containerRef.current,
      responsive: true,
      barWidth: 1,
      barHeight: 2,
      height: 40,
      cursorWidth: 0,
      fillParent: false,
      minPxPerSec: 15, 
      waveColor: '#EFEFEF',
      progressColor: 'blue',
    });
    waveSurfer.load(audio);
    waveSurfer.on('ready', () => {
      waveSurferRef.current = waveSurfer;
    });

    return () => {
      waveSurfer.destroy();
    };
  }, [audio]);

  return (
    <WaveSurferWrap>
      <button className='playbtn' 
        onClick={() => {
          waveSurferRef.current.playPause();
          toggleIsPlaying(waveSurferRef.current.isPlaying());
        }}
        type="button"
      >
        {isPlaying ? <FaPauseCircle size="3em" /> : <FaPlayCircle size="3em" />}
      </button>
      <div ref={containerRef} id="graph" />
    </WaveSurferWrap>
  );
};

Waveform.propTypes = {
  audio: PropTypes.string.isRequired,
};

const WaveSurferWrap = styled.div`
  display: grid;
  grid-template-columns: 40px 1fr;
  align-items: center;
 
  button {
    width: 40px;
    height: 40px;
    border: none;
    padding: 0;
    background-color: white;
  }
`;


export default Waveform;
