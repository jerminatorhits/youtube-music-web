import React, { Component } from 'react';
import './ShuffleButton.css';

class ShuffleButton extends Component {
  constructor(props) {
    super(props);
  }

  handleClick() {
  }

  render() {
    return (
      <button className="shuffleButton" onClick={this.handleClick.bind(this)}>{this.props.isShuffle ? "ON" : "OFF"}</button>
    );
  }
}

export default ShuffleButton;
