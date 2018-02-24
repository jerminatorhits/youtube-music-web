import React, { Component } from 'react';
import Listing from './item';
import './ResultContainer.css';

class ResultContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEmpty: true
    }
  }

  renderListings(listings) {
    return listings.map(listing => {
      return (
        <Listing
          key={listing.id.videoId}
          title={listing.snippet.title}
          channelTitle={listing.snippet.channelTitle}
          thumbnail={listing.snippet.thumbnails.default}
          addVideo={this.props.addVideo}
          video={listing} />
      );
    });
  }

  render() {
    return (
      <div className="result-wrapper">
        <ul className="result-list-style">
          { this.renderListings(this.props.listings) }
        </ul>
      </div>
    );
  }
}

export default ResultContainer;
