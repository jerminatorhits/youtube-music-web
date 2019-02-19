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
      <button className="playButton" onClick={this.handleClick.bind(this)}>
        {this.props.isPlaying
          ? <i class="fas fa-pause"></i>
          : <i class="fas fa-play"></i>
        }
      </button>
    );
  }
}

export default PlayButton;
