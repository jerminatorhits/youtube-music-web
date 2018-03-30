import React, { Component } from 'react';
import './PlayButton.css';

class PlayButton extends Component {
  constructor(props) {
    super(props);
  }

  handleClick() {
    this.props.toggleButton();
  }

  render() {
    return (
      <button className="playButton" onClick={this.handleClick.bind(this)}>{this.props.isPlaying ? "Pause" : "Play"}</button>
    );
  }
}

export default PlayButton;
