import React, { Component } from 'react'

class SearchBar extends Component {
  render() {
    return (
      <div>
        <input type="text" className="form-search form-control"
        placeholder="search for something"
        onChange={this.props.handleInput}
        />
      </div>
    )
  }
}

export default SearchBar;
