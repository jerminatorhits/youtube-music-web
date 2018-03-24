import React, { Component } from 'react';
import { connect } from 'react-redux';
import { playNext, nullifyVideo, reinstateVideo } from '../../../actions/mediaPlayerActions';
import YouTube from 'react-youtube';
import './VideoBox.css';

class VideoBox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentVideo: null
    }
  }

  renderVideo(currentVideo) {
  //const isLoggedIn = props.isLoggedIn;
  const opts = {
    width: "560",
    height: "315",
    frameBorder: "0",
    playerVars: {
      autoplay: 1,
      rel: 0
    }
  };

  if (currentVideo == null) {
    return <h2>Watch YouTube Video Here</h2>;
  }
    return <YouTube
             videoId={currentVideo.id.videoId}
             opts={opts}
             onReady={this._onReady}
             onEnd={this._onEnd}
             onPlay={this._onPlay}
             onPause={this._onPause}
           />
  }

  componentWillReceiveProps(nextProps) {
    if(JSON.stringify(this.props.currentVideo) !== JSON.stringify(nextProps.currentVideo)) // Check if it's a new user, you can also use some unique, like the ID
    {
      console.log("I supposedly updated...");
      this.forceUpdate();
    }
} 

  _onReady(event) {
    event.target.playVideo();
  }

  _onEnd = () => {
    this.props.dispatch(playNext());
    this.props.dispatch(nullifyVideo());
    this.props.dispatch(reinstateVideo());
  }

  _onPlay = (event) => {
    event.target.playVideo();
    this.props.togglePlay();
  }

  _onPause = (event) => {
    event.target.pauseVideo();
    this.props.togglePlay();
  }

  render() {
    console.dir(this.props.dispatch);
    return (
      <div className="video-container">
        {this.renderVideo(this.props.currentVideo)}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentVideo: state.mediaPlayer.currentVideo
  }
}

export default connect(mapStateToProps)(VideoBox);
