import React, { Component } from 'react';
import './RepeatButton.css';

class RepeatButton extends Component {
  constructor(props) {
    super(props);
  }

  handleClick() {

  }

  render() {
    return (
      <button className="repeatButton" onClick={this.handleClick.bind(this)}>{this.props.isRepeat ? "ON" : "OFF"}</button>
    );
  }
}

export default RepeatButton;
