import React, { Component } from 'react';
import CurrentPlaylist from './CurrentPlaylist';
import VideoBox from './VideoBox';
import ToolBar from './ToolBar';
import './MediaPlayer.css';

class MediaPlayer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="media-player">
        <VideoBox />
        <CurrentPlaylist />
        <ToolBar />
      </div>
    );
  }
}

export default MediaPlayer;
