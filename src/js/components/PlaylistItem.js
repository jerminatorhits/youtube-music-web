import React, { Component } from 'react';
import './PlaylistItem.css';

class PlaylistItem extends Component {
  constructor(props) {
    super(props);
  }

  onClick() {
    this.props.playSelected(this.props.video);
    console.log("Playlist Item Clicked");
  }

  render() {
    return (
      <li className="resultItem" onClick={this.onClick.bind(this)}>
        <div className="itemBox">
          <div className="crop">
            <img className="ytImgThumbImg"
              alt="video thumbnail"
              src={this.props.thumbnail.url}
              width={this.props.thumbnail.width}
              height={this.props.thumbnail.height} />
          </div>
          <h3>{this.props.title}</h3>
          <h4>{this.props.channelTitle}</h4>
        </div>
      </li>
    );
  }
}

export default PlaylistItem;