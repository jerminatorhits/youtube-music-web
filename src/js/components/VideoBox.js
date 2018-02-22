import React, { Component } from 'react';
import YouTube from 'react-youtube';
import './VideoBox.css';

class VideoBox extends Component {
  constructor(props) {
    super(props);
  }

  renderVideo(currentVideo) {
  //const isLoggedIn = props.isLoggedIn;

  const opts = {
    width: "560",
    height: "315",
    frameBorder: "0",
    playerVars: {
      autoplay: 1
    }
  };

  if (currentVideo === "") {
    return <h2>Place YouTube Video Here</h2>;
  }
    return <YouTube
             videoId={currentVideo.id.videoId}
             opts={opts}
             onReady={this._onReady}
             onEnd={this._onEnd}
           />
  }

  _onReady(event) {
    event.target.playVideo();
  }

  _onEnd = () => {
    this.props.playNext();
  }

  render() {
    return (
      <div className="video-container">
        {this.renderVideo(this.props.currentVideo)}
      </div>
    );
  }
}

export default VideoBox;
