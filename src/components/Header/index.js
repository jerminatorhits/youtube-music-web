import React, { Component } from 'react';
import SearchBar from './SearchBar';
import './Header.css';

class Header extends Component {
	
  render() {
    return (
      <div className="topHeader">
        <SearchBar />
      </div>
    );
  }
}

export default Header;
