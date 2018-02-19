import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);
  }

  handleSearch(e) {
    const query = e.target.value;
    this.props.updateQuery(query);
  }

  handleSubmit(e) {
    e.preventDefault();
    if (e.keyCode === 13) {
      this.props.fetchResults();
    }
  }

  handleClick() {
    this.props.fetchResults();
  }

  render() {
    return (
      <div className="searchcss">
        <input value={this.props.query} onKeyUp={this.handleSubmit.bind(this)} onChange={this.handleSearch.bind(this)} type="text" placeholder="Search.." name="search" />
        <button type="submit" onClick={this.handleClick.bind(this)}><i className="fa fa-search"></i></button>
      </div>
    );
  }
}

export default SearchBar;
