import React, { Component } from 'react';

class SearchBar extends Component {
  state = {
    term: '',
  };

  onInputChange = (e) => {
    this.setState({ term: e.target.value });
  };

  onFormSubmit = (e) => {
    e.preventDefault();
    this.props.onFormSubmit(this.state.term);
  };
  render() {
    return (
      <div className='search-bar ui segment'>
        <form onSubmit={this.onFormSubmit} className='ui form'>
          <label htmlFor='search' className='field'>
            A Video Search
          </label>
          <input
            type='text'
            id='search'
            value={this.term}
            onChange={this.onInputChange}
          />
        </form>
      </div>
    );
  }
}

export default SearchBar;
