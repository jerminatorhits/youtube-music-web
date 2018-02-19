import React, { Component } from 'react';
import './VideoBox.css';

class VideoBox extends Component {
  constructor(props) {
    super(props);
  }

  renderVideo(currentVideo) {
  //const isLoggedIn = props.isLoggedIn;
  if (currentVideo === "") {
    return <h2>Place YouTube Video Here</h2>;
  }
    return <iframe width="560" height="315" src={"https://www.youtube.com/embed/" + this.props.currentVideo.id.videoId} frameBorder="0" allow="autoplay; encrypted-media"></iframe>;
  }

  render() {
    return (
      <div className="video-container">
        { this.renderVideo(this.props.currentVideo) }
      </div>
    );
  }
}

export default VideoBox;
