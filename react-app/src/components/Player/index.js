import React, {useEffect} from 'react';
import ReactPlayer from 'react-player';


// Render a audio player
function Player({ url, autoPlay, updatePlayButton, updatePauseButton }) {
useEffect(() => {
  console.log(autoPlay)
}, [autoPlay])
  return <ReactPlayer url={url} width='376px' height='52px' volume={0.3} playing={autoPlay} onPlay={updatePlayButton} controls onPause={updatePauseButton}/>;
}

export default Player;
