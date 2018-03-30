import React, { Component } from 'react';
import { connect } from 'react-redux';
import PlayButton from './PlayButton';
import RangeSlider from './RangeSlider';
import './ToolBar.css';

class ToolBar extends Component {
  constructor(props) {
    super(props);
  }

  toggleButton() {
    if (this.props.player) {
      const player = this.props.player;
      if (player.getPlayerState() === 1) {
        player.pauseVideo();
      }
      else if (player.getPlayerState() === 2) {
        player.playVideo();
      }
    }
  }

  render() {
    return (
      <div className="tool-bar-style">
        <PlayButton toggleButton={this.toggleButton.bind(this)} isPlaying={this.props.isPlaying} />
        <RangeSlider />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { 
    isPlaying: state.mediaPlayer.isPlaying,
    player: state.mediaPlayer.player
  }
}

export default connect(mapStateToProps)(ToolBar);