import React, { Component } from 'react';
import { connect } from 'react-redux';
import { shuffleOn, shuffleOff } from '../../../actions/mediaPlayerActions'
import './ShuffleButton.css';

class ShuffleButton extends Component {
  constructor(props) {
    super(props);
  }

  handleClick() {
    this.props.isShuffled ? this.props.dispatch(shuffleOff()) : this.props.dispatch(shuffleOn());
  }

  render() {
    return (
      <button className="shuffleButton" onClick={this.handleClick.bind(this)}>{this.props.isShuffled ? "ON" : "OFF"}</button>
    );
  }
}

function mapStateToProps(state) {
  return { 
    isShuffled: state.mediaPlayer.isShuffled
  }
}

export default connect(mapStateToProps)(ShuffleButton);
