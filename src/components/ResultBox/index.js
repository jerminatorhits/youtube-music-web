import React, { Component } from 'react';
import { connect } from 'react-redux';
import Track from '../Track';
import magnifier from '../../utils/icons/magnifier.svg';
import './ResultBox.css';

class ResultBox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isPristine: true
    };
  }

  handleClick = () => {
    this.setState({isPristine: false});
  }

  renderTracks = (tracks) => {
    if (tracks === null || tracks.length === 0) {
      return (
        <div className="result-empty-container">
          <img className="magnifier-style" src={magnifier} />
          <h3 className="result-empty-text">Find your favorite music in the Search Bar</h3>
        </div>
      );
    }
    return (
      <ul className={`result-list-style ${!this.state.isPristine ? 'blurify' : ''}`} onClick={this.handleClick}>
        {
          tracks.map(track => {
            return (
              <Track
                key={track.id.videoId}
                title={track.snippet.title}
                channelTitle={track.snippet.channelTitle}
                thumbnail={track.snippet.thumbnails.default}
                addVideo={this.props.addVideo}
                video={track} />
            );
          })
        }
      </ul>
    );
  }

  render() {
    return (
      <div className="result-wrapper">
        { this.renderTracks(this.props.tracks) }
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { 
    tracks: state.search.results
  }
}

export default connect(mapStateToProps)(ResultBox);
