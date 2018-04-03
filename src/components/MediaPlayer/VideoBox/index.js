import React, { Component } from 'react';
import { connect } from 'react-redux';
import { notPlaying, playing, togglePlay, mountPlayer, playNext, incrementIndex, nullifyVideo, reinstateVideo } from '../../../actions/mediaPlayerActions';
import YouTube from 'react-youtube';
import './VideoBox.css';

class VideoBox extends Component {
  constructor(props) {
    super(props);
  }

  renderPlayerWindow(currentVideo) {
  //const isLoggedIn = props.isLoggedIn;
  const opts = {
    width: "560",
    height: "315",
    frameBorder: "0",
    playerVars: {
      autoplay: 1,
      rel: 0,
      origin: "https://rocky-lake-35234.herokuapp.com/"
    }
  };

  if (currentVideo == null) {
    return <h2>Watch YouTube Video Here</h2>;
  }
    return <YouTube
             id="player"
             videoId={currentVideo.id.videoId}
             opts={opts}
             onReady={this._onReady}
             onEnd={this._onEnd}
             onPlay={this._onPlay}
             onPause={this._onPause}
             onStateChange={this._onStateChange}
           />
  }

  componentDidMount() {
    this.props.dispatch(notPlaying());
  }

  _onReady = (event) => {
    this.props.dispatch(mountPlayer(event));
    event.target.playVideo();
  }

  _onEnd = (event) => {
    this.props.dispatch(notPlaying());
    if (this.props.currentVideo === this.props.videos[this.props.currentIndex + 1]) {
      this.props.dispatch(incrementIndex());
      event.target.playVideo();
    }
    else {
      this.props.dispatch(playNext());
    }
  }

  _onPlay = (event) => {
    this.props.dispatch(playing());
  }

  _onPause = (event) => {
    this.props.dispatch(notPlaying());
  }

  render() {
    return (
      <div className="video-container">
        {this.renderPlayerWindow(this.props.currentVideo)}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    player: state.mediaPlayer.player,
    currentVideo: state.mediaPlayer.currentVideo,
    currentIndex: state.mediaPlayer.currentIndex,
    videos: state.mediaPlayer.videos,
    isPlaying: state.mediaPlayer.isPlaying
  }
}

export default connect(mapStateToProps)(VideoBox);
