import React, { Component } from 'react';
import { connect } from 'react-redux';
import CurrentPlaylist from './CurrentPlaylist';
import VideoBox from './VideoBox';
import ToolBar from './ToolBar';
import './MediaPlayer.css';

class MediaPlayer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentVideo: null,
      currentIndex: 0,
      playing: false
    };
  }

  playSelected(video) {
    const videos = this.props.videos;
    const currentIndex = videos.indexOf(video);
    this.loadVideo(video, currentIndex);

  }

  /*
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
  */

  togglePlay(event) {
    if (this.props.playing || this.props.currentVideo === "") {
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

  /*
  playNext() {
    if (this.props.currentIndex < this.props.videoslength - 1) {
      var nextIndex = this.state.currentIndex + 1;
      var nextVideo = this.props.videos[nextIndex];
      this.loadVideo(nextVideo, nextIndex);
    }
  }
  */

  render() {
    return (
      <div className="media-player">
        <VideoBox
          togglePlay={this.togglePlay.bind(this)}
        />
        <CurrentPlaylist
          playSelected={this.playSelected.bind(this)}
        />
        <ToolBar
          togglePlay={this.togglePlay.bind(this)}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentVideo: state.mediaPlayer.currentVideo,
    currentIndex: state.mediaPlayer.currentIndex,
  }
}

export default connect(mapStateToProps)(MediaPlayer);
