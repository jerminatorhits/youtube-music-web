import React, { Component } from 'react';
import CurrentPlaylist from './CurrentPlaylist';
import VideoBox from './VideoBox';
import './MediaPlayer.css';

class MediaPlayer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentVideo: ""
    }
  }

  playSelected(video) {
    console.log("Video Selected");
    console.log(video);
    this.setState({ currentVideo: video});
  }

  render() {
    return (
      <div className="media-player">
        <VideoBox currentVideo={this.state.currentVideo} />
        <CurrentPlaylist playlist={this.props.playlist} playSelected={this.playSelected.bind(this)} />
      </div>
    );
  }
}

export default MediaPlayer;
