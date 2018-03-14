import React, { Component } from 'react';
import { connect } from 'react-redux';
import Listing from './item';
import './ResultBox.css';

class ResultBox extends Component {
  constructor(props) {
    super(props);
  }

  renderListings(listings) {
    if (listings === null || listings.length === 0) {
      return <h1>There's nothing here</h1>
    }
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

function mapStateToProps(state) {
  return { 
    listings: state.search.results
  }
}

export default connect(mapStateToProps)(ResultBox);
