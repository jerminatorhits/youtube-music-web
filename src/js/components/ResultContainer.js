import React, { Component } from 'react';

class ResultContainer extends Component {

  render() {
    const containerStyle = {
      border: '1px solid black',
      minWidth: '200px',
      minHeight: '200px',
      height: '600px',
      width: '600px',
      margin: '0 auto'
    }
    return (
      <div style={containerStyle}>
        <h1>Put music videos in here!</h1>
      </div>
    );
  }
}

export default ResultContainer;
