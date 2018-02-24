import React, { Component } from 'react';
import CurrentPlaylist from './CurrentPlaylist';
import VideoBox from './VideoBox';
import ToolBar from './ToolBar';
import './MediaPlayer.css';

class MediaPlayer extends Component {
  constructor(props) {
    super(props);

    this.initialState = {
      currentVideo: "",
      currentIndex: 0,
      playing: false
    };
    
    this.state = this.initialState;
  }

  playSelected(video) {
    const playlist = this.props.playlist;
    const currentIndex = playlist.indexOf(video);
    this.loadVideo(video, currentIndex);

  }

  loadVideo(video, index) {
    this.setState(this.initialState);
    setTimeout(() => {
      this.setState({
        currentVideo: video,
        currentIndex: index,
        playing: true
      });
    }, 1)
  }

  togglePlay(event) {
    if (this.state.playing || this.state.currentVideo === "") {
      this.setState({
        playing: false
      });
    }
    else {
      this.setState({
        playing: true
      });
    }
  }

  playNext() {
    if (this.state.currentIndex < this.props.playlist.length - 1) {
      var nextIndex = this.state.currentIndex + 1;
      var nextVideo = this.props.playlist[nextIndex];
      this.loadVideo(nextVideo, nextIndex);
    }
  }

  render() {
    return (
      <div className="media-player">
        <VideoBox
          currentVideo={this.state.currentVideo}
          playNext={this.playNext.bind(this)}
          togglePlay={this.togglePlay.bind(this)}
        />
        <CurrentPlaylist
          playlist={this.props.playlist}
          playSelected={this.playSelected.bind(this)}
        />
        <ToolBar
          togglePlay={this.togglePlay.bind(this)}
          playing={this.state.playing}
        />
      </div>
    );
  }
}

export default MediaPlayer;
