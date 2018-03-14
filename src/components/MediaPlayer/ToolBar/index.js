import React, { Component } from 'react';
import { connect } from 'react-redux';
import PlayButton from './PlayButton';
import RangeSlider from './RangeSlider';
import './ToolBar.css';

class ToolBar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="tool-bar-style">
        <PlayButton togglePlay={this.props.togglePlay} playing={this.props.playing} />
        <RangeSlider />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { 
    playing: state.mediaPlayer.playing
  }
}

export default connect(mapStateToProps)(ToolBar);