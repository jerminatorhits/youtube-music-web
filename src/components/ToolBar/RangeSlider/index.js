import React, { Component } from 'react';
import './RangeSlider.css';

class RangeSlider extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
    	<div className="rangeSlider">
    		<h6>0:00</h6>
      		<input type="range" min="1" max="100" value="50" />
      		<h6>4:32</h6>
      	</div>
    );
  }
}

export default RangeSlider;
