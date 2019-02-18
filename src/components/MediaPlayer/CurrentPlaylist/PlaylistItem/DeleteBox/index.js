import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteVideo } from '../../../../../actions/mediaPlayerActions';
import './DeleteBox.css';

class DeleteBox extends Component {
  constructor(props) {
    super(props);
  }

  handleClick() {
    this.props.dispatch(deleteVideo(this.props.itemID));
  }

  render() {
    return (
        <span onClick={this.handleClick.bind(this)} className="deleteBox">x</span>
    );
  }
}

function mapStateToProps(state) {
  return {}
}

export default connect(mapStateToProps)(DeleteBox);