import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addVideo } from '../../actions/mediaPlayerActions'
import './Track.css';

class Track extends Component {
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
          <div className="track-options-container">
            <div>
              <p onClick={this.onClick.bind(this)}>+</p>
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

export default connect(mapStateToProps)(Track);