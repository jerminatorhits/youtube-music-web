import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toggleRepeat } from '../../../actions/mediaPlayerActions'
import './RepeatButton.css';

class RepeatButton extends Component {
  constructor(props) {
    super(props);
  }

  handleClick() {
    this.props.dispatch(toggleRepeat());
  }

  render() {
    console.log('this.props:', this.props);
    return (
      <button className="repeatButton" onClick={this.handleClick.bind(this)}>
        {this.props.repeat}
      </button>
    );
  }
}

function mapStateToProps(state) {
  console.log('state:', state);
  return { 
    repeat: state.mediaPlayer.repeat
  }
}

export default connect(mapStateToProps)(RepeatButton);
