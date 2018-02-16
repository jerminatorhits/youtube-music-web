import React, { Component } from 'react';

class SearchBar extends Component {
  handleChange(e) {
    const title = e.target.value;
    this.props.changeTitle(title);
  }

  render() {
    return (
      <form class="searchcss">
        <input value={this.props.title} onSubmit={this.handleChange.bind(this)} type="text" placeholder="Search.." name="search" />
        <button type="submit"><i class="fa fa-search"></i></button>
      </form>
    );
  }
}

export default SearchBar;
