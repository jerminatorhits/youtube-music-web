import React, { Component } from 'react';
import { connect } from 'react-redux';
import { playSelected, nullifyVideo, reinstateVideo } from '../../../../actions/mediaPlayerActions';
import DeleteBox from './DeleteBox';
import './PlaylistItem.css';

class PlaylistItem extends Component {
  constructor(props) {
    super(props);
  }

  onDoubleClick() {
    this.props.dispatch(playSelected(this.props.itemID));
    this.props.dispatch(nullifyVideo());
    setTimeout(() => this.props.dispatch(reinstateVideo()), 1);
    setTimeout(() => {
      console.log(this.props.currentVideo); console.log(this.props.video);
    }, 100);
  }

  render() {
    return (
      <div className="relative">
        <li className="resultItem" onDoubleClick={this.onDoubleClick.bind(this)}>
          <div className={`itemBox${this.props.currentVideo == this.props.video ? ' selected' : ''}`}>
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
        <DeleteBox itemID={this.props.itemID} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentVideo: state.mediaPlayer.currentVideo
  }
}

export default connect(mapStateToProps)(PlaylistItem);