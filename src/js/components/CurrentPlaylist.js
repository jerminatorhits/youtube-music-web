import React, { Component } from 'react';
import './CurrentPlaylist.css';
import PlaylistItem from './PlaylistItem';

class CurrentPlaylist extends Component {

  renderListings(listings) {
    return listings.map((listing, i) => {
      return (
        <PlaylistItem
          key={i}
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
          { this.renderListings(this.props.playlist) }
        </ul>
      </div>
    );
  }
}

export default CurrentPlaylist;
