import React from 'react';
import ReactPlayer from 'react-player';

// Render a audio player
function Player({ albumId, url, autoPlay, updatePlayButton, updatePauseButton }) {

  return <ReactPlayer url={url} width='376px' height='52px' volume={0.3} playing={autoPlay} onPlay={updatePlayButton} controls onPause={updatePauseButton}/>;
}

export default Player;
