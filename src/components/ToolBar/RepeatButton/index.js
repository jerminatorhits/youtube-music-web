import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toggleRepeat } from '../../../actions/mediaPlayerActions'
import './RepeatButton.css';

const statusToIcon = {
  OFF: 'OFF',
  SONG: <i className="fab fa-itunes-note"></i>,
  PLAYLIST: <i className="fas fa-redo-alt"></i>,
};

class RepeatButton extends Component {
  constructor(props) {
    super(props);
  }

  handleClick() {
    this.props.dispatch(toggleRepeat());
  }

  render() {
    return (
      <button className="repeatButton" onClick={this.handleClick.bind(this)}>
        {statusToIcon[this.props.repeat]}
      </button>
    );
  }
}

function mapStateToProps(state) {
  return { 
    repeat: state.mediaPlayer.repeat
  }
}

export default connect(mapStateToProps)(RepeatButton);
