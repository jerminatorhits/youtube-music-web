import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addVideo } from '../../actions/mediaPlayerActions'
import plus from '../../utils/icons/plus.svg';
import './Listing.css';

class Listing extends Component {
  constructor(props) {
    super(props);
  }

  onClick() {
    this.props.dispatch(addVideo(this.props.video));
  }

  render() {
    return (
      <li className="resultItem">
        <div className="itemBox">
          <div className="crop">
            <img className="ytImgThumbImg"
              alt="video thumbnail"
              src={this.props.thumbnail.url}
              width={this.props.thumbnail.width}
              height={this.props.thumbnail.height} />
          </div>
          <div className="text-info">
            <h3>{this.props.title}</h3>
            <h4>{this.props.channelTitle}</h4>
          </div>
          <div className="listing-options-container">
            <div className="plus-container" onClick={this.onClick.bind(this)}>
              <img className="plus-style" src={plus} />
            </div>
          </div>
        </div>
      </li>
    );
  }
}

const mapStateToProps = state => {
  const { mediaPlayerReducer } = state
  return { 
    mediaPlayerReducer
  }
}

export default connect(mapStateToProps)(Listing);