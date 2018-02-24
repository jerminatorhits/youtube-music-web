import React, { Component } from 'react';

class RangeSlider extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <input type="range" min="1" max="100" value="50" />
    );
  }
}

export default RangeSlider;
