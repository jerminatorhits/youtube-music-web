import React, { Component } from 'react';
import './PlayButton.css';

class PlayButton extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: "play"
    }
  }

  handleClick() {
    this.props.togglePlay();
    if (!this.props.playing) {
      console.log("i should say play");
      this.setState({
        text: "play"
      });
    }
    else {
      console.log("i should say pause");
      this.setState({
        text: "pause"
      });
    }
  }



  render() {
    const isPlaying = this.props.playing;
    return (
      <button className="playButton" onClick={this.handleClick.bind(this)}>{isPlaying ? "Pause" : "Play"}</button>
    );
  }
}

export default PlayButton;