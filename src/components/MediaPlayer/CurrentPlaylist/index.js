import React, { Component } from 'react';
import { connect } from 'react-redux';
import './CurrentPlaylist.css';
import PlaylistItem from './PlaylistItem';

class CurrentPlaylist extends Component {

  renderListings(listings) {
    return listings.map((listing, i) => {
      return (
        <PlaylistItem
          key={i}
          itemID={i}
          title={listing.snippet.title}
          channelTitle={listing.snippet.channelTitle}
          thumbnail={listing.snippet.thumbnails.default}
          video={listing}
          playSelected={this.props.playSelected} />
      );
    });
  }

  render() {
    return (
      <div className="current-playlist-wrapper">
        <ul className="result-list-style">
          { this.renderListings(this.props.videos) }
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { 
    videos: state.mediaPlayer.videos
  }
}

export default connect(mapStateToProps)(CurrentPlaylist);
