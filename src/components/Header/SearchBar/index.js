import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchResults } from '../../../actions/searchActions'

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: ""
    }
  }

  // handleSearch(e) {
  //   const query = e.target.value;
  //   this.setState = ({ query });
  // }

  handleChange = e => {
    this.setState({ query : e.target.value });
  }

  handleSubmit = e => {
    if (this.state.query !== "") { 
      e.preventDefault();
      if (e.keyCode === 13) {
        this.props.dispatch(fetchResults(this.state.query));
      }
    }
  }

  handleClick = () => {
    if (this.state.query !== "") {
      this.props.dispatch(fetchResults(this.state.query));
    }
  }

  render() {
    return (
      <div className="searchcss">
        <input value={this.state.query} onKeyUp={this.handleSubmit.bind(this)} onChange={this.handleChange.bind(this)} type="text" placeholder="Search.." name="search" />
        <button type="submit" onClick={this.handleClick.bind(this)}><i className="fa fa-search"></i></button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { searchReducer } = state
  return { 
    searchReducer
  }
}

export default connect(mapStateToProps)(SearchBar);
