import React, { Component } from 'react';
import CurrentPlaylist from './CurrentPlaylist';
import VideoBox from './VideoBox';
import './MediaPlayer.css';

class MediaPlayer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentVideo: "",
      currentIndex: 0
    }
  }

  playSelected(video) {
    console.log("Video Selected");
    console.log(video);
    const playlist = this.props.playlist;
    const currentIndex = playlist.indexOf(video);
    this.setState({
      currentVideo: video,
      currentIndex: currentIndex
    });
  }

  playNext() {
    if (this.state.currentIndex < this.props.playlist.length - 1) {
      var nextIndex = this.state.currentIndex + 1;
      this.setState({
        currentVideo: this.props.playlist[nextIndex],
        currentIndex: nextIndex
      });
    }
  }

  render() {
    return (
      <div className="media-player">
        <VideoBox
          currentVideo={this.state.currentVideo}
          playNext={this.playNext.bind(this)}
        />
        <CurrentPlaylist
          playlist={this.props.playlist}
          playSelected={this.playSelected.bind(this)}
        />
      </div>
    );
  }
}

export default MediaPlayer;
