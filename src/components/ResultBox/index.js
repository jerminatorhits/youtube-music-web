import React, { Component } from 'react';
import { connect } from 'react-redux';
import Listing from '../Listing';
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

  renderListings = (listings) => {
    if (listings === null || listings.length === 0) {
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
          listings.map(listing => {
            return (
              <Listing
                key={listing.id.videoId}
                title={listing.snippet.title}
                channelTitle={listing.snippet.channelTitle}
                thumbnail={listing.snippet.thumbnails.default}
                addVideo={this.props.addVideo}
                video={listing} />
            );
          })
        }
      </ul>
    );
  }

  render() {
    return (
      <div className="result-wrapper">
        { this.renderListings(this.props.listings) }
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
